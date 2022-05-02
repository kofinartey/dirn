import { makeStyles } from "@mui/styles";

const AvatarStyles = makeStyles({
  Avatar: {
    position: "relative",
  },
  overlay: {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    left: "0",
    top: "0",
  },
  avatar__default: {
    width: "3rem",
    height: "3rem",
    backgroundColor: "#7C5DFA",
    color: "white",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "& p": {
      fontWeight: "800",
      fontSize: "1.4rem",
    },
    "& img": {
      width: "3rem",
      borderRadius: "50%",
    },
  },
  avatar_img: {
    width: "3rem",
    borderRadius: "50%",
  },
  DropDownMenu: {
    position: "absolute",
    // top: "-10rem",
    // right: "-14rem",
    top: "3rem",
    right: "0",
    display: "flex",
    justifyContent: "flex-start",
  },
  DropDownItem: {
    fontSize: "0.8rem",
    padding: "0.5rem ",
    margin: "0.2rem 0",
    display: "flex",
    alignItems: "center",
    borderRadius: "0.5rem",
    cursor: "pointer",
    "& p": {
      margin: "0 0.5rem",
      whiteSpace: "nowrap",
    },
    "& span:nth-of-type(2)": {
      marginLeft: "auto",
    },
    "&:hover": {
      backgroundColor: "rgba(124,93,230,0.1)",
    },
  },
  username: {
    display: "flex",
    alignItems: "center",
    "& div:nth-of-type(1)": {
      marginRight: "2rem",
    },
    "& small": {
      color: "#7C5DFA",
    },
  },

  "@media(min-width: 64rem)": {
    DropDownMenu: {
      bottom: "0",
      left: "5rem",
      right: "unset",
      top: "unset",
    },
  },
});

export default AvatarStyles;
