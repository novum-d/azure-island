import { CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import { useReducer } from "react";
import { Common } from "../ui/components/Common/Comon";
import { useLocalTheme } from "../hooks/useLocalTheme";
import { navRoutes } from "./consts/navRoutes";
import { HomePage } from "../ui/pages/Home/HomePage";
import { IslandPage } from "../ui/pages/Island/IslandPage";
import { LoginPage } from "../ui/pages/Login/LoginPage";

export const App = () => {
  const [theme, setTheme] = useLocalTheme();
  const [auth, setAuth] = useReducer((auth) => !auth, true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router(setTheme, setAuth, auth)} />
    </ThemeProvider>
  );
};

const router = (setTheme: () => void, setAuth: () => void, auth: boolean) =>
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
            { path: navRoutes.home, element: <HomePage /> },
            { path: navRoutes.island, element: <IslandPage /> },
            { path: navRoutes.settings, element: <div>settings</div> },
          ],
        },
      ],
    },
    // public routes
    {
      path: navRoutes.login,
      element: auth ? <Navigate to={navRoutes.home} /> : <LoginPage setAuth={setAuth} />,
    },
    // not found(404)
    { path: "*", element: <div>Not found</div> },
  ]);
