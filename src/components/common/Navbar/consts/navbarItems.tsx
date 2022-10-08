import AppsIcon from "@mui/icons-material/Apps";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";

export const navbarItems = [
  {
    id: 0,
    icon: <HomeIcon />,
    label: "ホーム",
    route: "home",
  },
  {
    id: 1,
    icon: <AppsIcon />,
    label: "アイランド",
    route: "island",
  },
  {
    id: 2,
    icon: <SettingsIcon />,
    label: "設定",
    route: "settings",
  },
];
