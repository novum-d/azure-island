import { Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import { useReducer } from "react";
import Header from "./Header/Header";
import { Navbar } from "./Navbar/Navbar";
import Main from "./Main/Main";

export type CommonProps = {
  setTheme: () => void;
};

export const Common = ({ setTheme }: CommonProps) => {
  const [open, setOpen] = useReducer((expand) => !expand, true);
  const drawerWidth = 13; // rem
  return (
    <CommonLayout>
      <Header setExpand={setOpen} setTheme={setTheme} />
      <Navbar drawerRem={drawerWidth} expand={open} />
      <Main open={open} drawerWidth={drawerWidth}>
        <Toolbar />
        <Outlet />
      </Main>
    </CommonLayout>
  );
};

const CommonLayout = styled.div`
  display: flex;
  height: 0;
  z-index: -1;
  > :nth-of-type(2) {
    z-index: -1;
  }
`;
