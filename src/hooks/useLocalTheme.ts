import { useMemo } from "react";
import themes from "../theme/theme";
import { useLocalStorage } from "./useLocalStorage";

const key = "theme";

export const useLocalTheme = () => {
  const [mode, storeMode] = useLocalStorage(
    key,
    themes.lightTheme.palette.mode
  );

  const theme = useMemo(() => {
    const lightMode = mode === "light";
    const switched = lightMode ? themes.lightTheme : themes.darkTheme;
    return switched;
  }, [mode]);

  const switchTheme = () => storeMode(mode === "light" ? "dark" : "light");

  return [theme, switchTheme] as const;
};
