import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness from "@mui/icons-material/Brightness6";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { SvgIcon } from "@mui/material";
import { useState, MouseEvent } from "react";
import { ReactComponent as Favicon } from "../../../../assets/favicon.svg";
import styles from "./Header.styles";

type HeaderProps = {
  setExpand: () => void;
  setTheme: () => void;
};

export const Header = ({ setExpand, setTheme }: HeaderProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const onProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const onMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={onMenuClose}
    >
      <MenuItem onClick={onMenuClose}>Profile</MenuItem>
      <MenuItem onClick={onMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar css={styles.header}>
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
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              onClick={onProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};
