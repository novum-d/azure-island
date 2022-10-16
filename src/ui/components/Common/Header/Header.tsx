import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness from "@mui/icons-material/Brightness6";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { SvgIcon } from "@mui/material";
import { ReactComponent as Favicon } from "../../../../assets/favicon.svg";
import { SytledProps } from "../../../../utils/types/StyledProps";
import styled from "@emotion/styled";

type HeaderProps = {
  setExpand: () => void;
  setTheme: () => void;
};

export const Header = ({ setExpand, setTheme }: HeaderProps) => {
  const HeaderToolbar = styled(({ className, children }: SytledProps) => <Toolbar className={className}>{children}</Toolbar>)`
    display: flex;
    justify-content: space-between;
    > div {
      :first-of-type {
        display: flex;
        align-items: center;
        margin-left: 2rem;
        flex-grow: 1; // 残りの余白を埋める
        > :last-child {
          margin-left: 0.5rem;
        }
      }
    }
  `;

  return (
    <Box>
      <AppBar position="fixed">
        <HeaderToolbar>
          <IconButton size="large" edge="start" color="inherit" onClick={setExpand} aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Box>
            <SvgIcon fontSize="medium" color="primary">
              <Favicon />
            </SvgIcon>
            <Typography variant="h5">Azure Island</Typography>
          </Box>
          <Box>
            <IconButton size="large" color="inherit" onClick={setTheme} aria-label="change brightness">
              <Brightness />
            </IconButton>
            <IconButton size="large" edge="end" aria-label="account of current user" color="inherit">
              <AccountCircle />
            </IconButton>
          </Box>
        </HeaderToolbar>
      </AppBar>
    </Box>
  );
};
