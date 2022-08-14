import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Toolbar } from "@mui/material";
import { css } from "@emotion/react";
import navbarItems from "./consts/navbarItems";

type NavbarProps = {
  drawerRem: number;
  expand: boolean;
};

const Navbar = ({ drawerRem, expand }: NavbarProps) => {
  const styled = css`
    width: ${drawerRem}rem;
    flex-shrink: 0;
  `;
  return (
    <Drawer css={styled} variant="persistent" anchor="left" open={expand}>
      <Toolbar />
      <List>
        {navbarItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Navbar;
