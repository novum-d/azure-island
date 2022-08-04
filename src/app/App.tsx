import { CssBaseline, Box, ThemeProvider, Toolbar } from "@mui/material";
import React, { useReducer } from "react";
import Header from "../components/common/Header/Header";
import Main from "../components/common/Main/Main";
import Navbar from "../components/common/Navbar/Navbar";
import useLocalTheme from "../hooks/useLocalTheme";
import Login from "../pages/Login/Login";
import styles from "./App.styles";

export default function App() {
  const [open, setOpen] = useReducer((expand) => !expand, false);
  const drawerWidth = 13; // rem
  const [theme, setTheme] = useLocalTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Login />
    </ThemeProvider>
  );
}

type CommonScreenProps = {
  open: boolean;
  drawerWidth: number;
  setOpen: () => void;
  setTheme: () => void;
  children: React.ReactNode;
};

function CommonLayout({
  open,
  drawerWidth,
  setOpen,
  setTheme,
  children,
}: CommonScreenProps) {
  return (
    <Box css={styles.layout}>
      <Header setExpand={setOpen} setTheme={setTheme} />
      <Navbar drawerRem={drawerWidth} expand={open} />
      <Main open={open} drawerWidth={drawerWidth}>
        <Toolbar />
        {children}
      </Main>
    </Box>
  );
}
