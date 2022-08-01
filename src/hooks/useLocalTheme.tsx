import { Theme } from "@mui/material";
import { useReducer } from "react";
import themes from "../theme/theme";

const switchTheme = (theme: Theme) => {
  switch (theme.palette.mode) {
    case "dark":
      return themes.lightTheme;
    case "light":
      return themes.darkTheme;
    default:
  }
  return theme;
};

const useLocalTheme = () => {
  const [theme, setTheme] = useReducer(switchTheme, themes.lightTheme);
  return [theme, setTheme] as const;
};

export default useLocalTheme;
