import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../utils/redux";
//my imports
import { switchTheme } from "../../state/theme/theme";
import Avatar from "../avatar/Avatar";
import AppbarStyles from "./AppbarStyles";
import { IconButton } from "@mui/material";
import logo from "../../assets/icons/logo.svg";
import sun from "../../assets/icons/icon-sun.svg";
import moon from "../../assets/icons/icon-moon.svg";
import AssessmentIcon from "@mui/icons-material/Assessment";

function Appbar() {
  const classes = AppbarStyles();
  const darkTheme = useAppSelector((state) => state.darkTheme);
  const dispatch = useAppDispatch();

  const changeTheme = () => {
    dispatch(switchTheme());
  };

  return (
    <div
      className={classes.Appbar}
      style={{ backgroundColor: darkTheme ? "hsl(233, 30%, 21%)" : "" }}
    >
      <Link to="/main" className={classes.logo__container}>
        <img src={logo} alt="logo" />
      </Link>
      <Link to="/dashboard">
        <AssessmentIcon
          sx={{
            color: "#7E88C3",
            width: "2rem",
            height: "3rem",
            cursor: "pointer",
          }}
        />
      </Link>

      <div className={classes.theme__user}>
        <div className={classes.container}>
          <IconButton onClick={changeTheme}>
            <img src={darkTheme ? sun : moon} alt="Theme switch" />
          </IconButton>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.container}>
          <Avatar />
        </div>
      </div>
    </div>
  );
}

export default Appbar;
