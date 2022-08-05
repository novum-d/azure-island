import { Box, Toolbar } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/Header/Header";
import Main from "../common/Main/Main";
import Navbar from "../common/Navbar/Navbar";
import styles from "./Home.styles";

type HomeProps = {
  open: boolean;
  drawerWidth: number;
  setOpen: () => void;
  setTheme: () => void;
};

function Home({ open, drawerWidth, setOpen, setTheme }: HomeProps) {
  return (
    <Box css={styles.layout}>
      <Header setExpand={setOpen} setTheme={setTheme} />
      <Navbar drawerRem={drawerWidth} expand={open} />
      <Main open={open} drawerWidth={drawerWidth}>
        <Toolbar />
        <Outlet />
      </Main>
    </Box>
  );
}

export default Home;
