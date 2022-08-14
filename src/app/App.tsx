import { CssBaseline, ThemeProvider } from "@mui/material";

import { useReducer } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import useLocalTheme from "../hooks/useLocalTheme";
import Home from "../components/Home/Home";
import Login from "../pages/Login/Login";

const App = () => {
  const [open, setOpen] = useReducer((expand) => !expand, true);
  const drawerWidth = 13; // rem
  const [theme, setTheme] = useLocalTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
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
              <Route index element={<Navigate to="island" />} />
              <Route path="island" element={<div>welcome to island</div>} />
            </Route>
          </Route>
          <Route
            path="/home"
            element={
              // 引数にreplaceがある場合は「replace」, 無い場合は「push」
              <Navigate to="/" />
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

const PrivateRoute = () => {
  const auth = true;
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default App;
