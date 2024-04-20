import AppBar from "@mui/material/AppBar";
import style from "./header.module.scss";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { HeaderType } from "../../types/types";

export const Header: React.FC<HeaderType> = ({ appName }) => {
  return (
    <AppBar position="static" className={style.headerStyle}>
      <Toolbar>
        <Typography className={style.headerTitleStyle}>{appName}</Typography>
      </Toolbar>
    </AppBar>
  );
};
