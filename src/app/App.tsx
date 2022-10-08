import { CssBaseline, ThemeProvider } from "@mui/material";
import { useReducer } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import { Common } from "../components/common/Comon";
import useLocalTheme from "../hooks/useLocalTheme";
import Login from "../pages/Login/Login";
import { navRoutes } from "./consts/navRoutes";

const App = () => {
  const [open, setOpen] = useReducer((expand) => !expand, true);
  const drawerWidth = 13; // rem
  const [theme, setTheme] = useLocalTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path={navRoutes.home} element={<PrivateRoute />}>
            {/* private routes */}
            <Route
              path={navRoutes.home}
              element={
                <Common
                  open={open}
                  drawerWidth={drawerWidth}
                  setOpen={setOpen}
                  setTheme={setTheme}
                />
              }
            >
              <Route index element={<Navigate to={navRoutes.island} />} />
              <Route
                path={navRoutes.island}
                element={<div>welcome to island</div>}
              />
            </Route>
          </Route>
          {/* public routes */}
          <Route path={navRoutes.login} element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

const PrivateRoute = () => {
  const auth = true;
  // authentication ...
  return auth ? <Outlet /> : <Navigate to={navRoutes.login} />;
};

export default App;
