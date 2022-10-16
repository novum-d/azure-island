import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Toolbar } from "@mui/material";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { navbarItems } from "./consts/navbarItems";
import styled from "@emotion/styled";
import { SytledProps } from "../../../../utils/types/StyledProps";

type NavbarProps = {
  drawerRem: number;
  expand: boolean;
};

export const Navbar = ({ drawerRem, expand }: NavbarProps) => {
  const navigate = useNavigate();

  const NavbarDrawer = styled(({ className, children }: SytledProps) => (
    <Drawer className={className} variant="persistent" anchor="left" open={expand}>
      {children}
    </Drawer>
  ))`
    width: ${drawerRem}rem;
    flex-shrink: 0;
  `;

  return (
    <NavbarDrawer>
      <Toolbar />
      <List>
        {navbarItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemButton onClick={() => navigate(item.route)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </NavbarDrawer>
  );
};
