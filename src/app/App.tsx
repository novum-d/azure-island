import { CssBaseline, ThemeProvider } from "@mui/material";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
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
    {
      element: auth ? <Outlet /> : <Navigate to={navRoutes.login} />,
      children: [
        {
          element: <Common setTheme={setTheme} />,
          children: [
            { path: navRoutes.home, element: <div>home</div> },
            { path: navRoutes.island, element: <div>island</div> },
            { path: navRoutes.settings, element: <div>settings</div> },
          ],
        },
      ],
    },
    {
      path: `${navRoutes.login}`,
      element: auth ? <Navigate to={navRoutes.home} /> : <Login />,
    },
    { path: "*", element: <div>Not found</div> },
  ]);
