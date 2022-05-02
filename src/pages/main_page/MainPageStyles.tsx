import { makeStyles } from "@mui/styles";

const MainPageStyles = makeStyles({
  MainPage: {
    width: "100%",
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    marginTop: "5rem",
    paddingBottom: "3rem",
  },
  wrapper: {
    width: "90%",
    margin: "2rem 0",
  },
  top: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "4rem",
  },
  top__left: {
    "& h4": {
      color: "#0C0E16",
      fontSize: "1.25rem",
    },
    "& p": {
      fontSize: "0.75rem",
      color: "#888EB0",
    },
  },
  top__right: {
    display: "flex",
    alignItems: "center",
  },

  new__invoice: {
    display: "flex",
    alignItems: "center",
    padding: ".3rem",
    backgroundColor: "#7C5DFA",
    borderRadius: "5rem",
    "& $icon__container": {
      width: "2rem",
      height: "2rem",
      backgroundColor: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
    },
    "& h5": {
      color: "white",
      margin: "0 .7rem",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  icon__container: {},
  list__container: {},

  "@media(min-width: 48rem)": {
    top__left: {
      "& h4": {
        fontSize: "2rem",
      },
      "& p": {
        color: "#888EB0",
      },
    },
  },
  "@media(min-width: 64rem)": {
    MainPage: {
      marginTop: "0",
      marginLeft: "3rem",
      padding: "3rem 0",
    },
    wrapper: {
      width: "70%",
    },
  },
  "@media(min-width: 80rem)": {
    wrapper: {
      width: "60%",
    },
  },
});

export default MainPageStyles;
