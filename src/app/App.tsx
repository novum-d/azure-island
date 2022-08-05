import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { useReducer } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import useLocalTheme from "../hooks/useLocalTheme";
import Login from "../pages/Login/Login";
import Home from "../components/Home/Home";

export default function App() {
  const [open, setOpen] = useReducer((expand) => !expand, false);
  const drawerWidth = 13; // rem
  const [theme, setTheme] = useLocalTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                open={open}
                drawerWidth={drawerWidth}
                setOpen={setOpen}
                setTheme={setTheme}
              />
            }
          >
            <Route
              path="services"
              element={<div>Wellcome to azure island</div>}
            />
          </Route>
          <Route
            path="/home"
            element={
              // 引数にreplaceがある場合は「replace」, 無い場合は「push」
              <Navigate to="/" />
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
