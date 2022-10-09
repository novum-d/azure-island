import { CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import { Common } from "../components/common/Comon";
import { Home } from "../components/Home/Home";
import { useLocalTheme } from "../hooks/useLocalTheme";
import Login from "../pages/Login/Login";
import { navRoutes } from "./consts/navRoutes";

export const App = () => {
  const [theme, setTheme] = useLocalTheme();
  const auth = true;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router(setTheme, auth)} />
    </ThemeProvider>
  );
};

const router = (setTheme: () => void, auth: boolean) =>
  createBrowserRouter([
    // private routes
    {
      path: navRoutes.root,
      element: auth ? <Outlet /> : <Navigate to={navRoutes.login} />,
      children: [
        {
          path: navRoutes.root,
          element: <Common setTheme={setTheme} />,
          children: [
            { element: <Navigate to={navRoutes.home} />, index: true },
            { path: navRoutes.home, element: <Home /> },
            { path: navRoutes.island, element: <div>island</div> },
            { path: navRoutes.settings, element: <div>settings</div> },
          ],
        },
      ],
    },
    // public routes
    {
      path: navRoutes.login,
      element: auth ? <Navigate to={navRoutes.home} /> : <Login />,
    },
    // not found(404)
    { path: "*", element: <div>Not found</div> },
  ]);
