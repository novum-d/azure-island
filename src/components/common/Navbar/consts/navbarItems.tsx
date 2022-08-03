import PersonIcon from "@mui/icons-material/Person";
import AppsIcon from "@mui/icons-material/Apps";
import SettingsIcon from "@mui/icons-material/Settings";

const navbarItems = [
  {
    id: 0,
    icon: <PersonIcon />,
    label: "ポートフォリオ",
    route: "authentication",
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

export default navbarItems;
