import { Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "./Header/Header";
import { Navbar } from "./Navbar/Navbar";
import Main from "./Main/Main";

export type CommonProps = {
  open: boolean;
  drawerWidth: number;
  setOpen: () => void;
  setTheme: () => void;
};

export const Common = ({
  open,
  drawerWidth,
  setOpen,
  setTheme,
}: CommonProps) => (
  <CommonLayout>
    <Header setExpand={setOpen} setTheme={setTheme} />
    <Navbar drawerRem={drawerWidth} expand={open} />
    <Main open={open} drawerWidth={drawerWidth}>
      <Toolbar />
      <Outlet />
    </Main>
  </CommonLayout>
);

const CommonLayout = styled.div`
  display: flex;
  > :nth-of-type(2) {
    z-index: -1;
  }
`;
