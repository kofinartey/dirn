import { makeStyles } from "@mui/styles";

const SettingsStyles = makeStyles({
  Settings: {
    width: "100%",
    height: "100vh",
    padding: "5rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  goBack: {
    alignSelf: "flex-start",
    display: "flex",
    alignItems: "center",
    margin: "2rem 10% ",
    "& p": {
      marginLeft: "0.5rem",
      fontWeight: "800",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  wrapper: {
    width: "90%",
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  profile_pic: {
    width: "8rem",
    height: "8rem",
    borderRadius: "50%",
    backgroundColor: "#7C5DFA",
    margin: "3rem 0",
    color: "white",
    border: "0.5rem solid white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "3rem",
    fontWeight: 800,
    boxShadow: " 0 10px 10px rgba(0,0,0,0.1)",
    "& img": {
      width: "7rem",
      height: "7rem",
      borderRadius: "50%",
    },
  },
  userName: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "4rem",
  },

  profile__btn: {
    padding: "0.8rem",
    borderRadius: "0.5rem",
    fontWeight: 700,
    color: "white",
    backgroundColor: "#7C5DFA",
    border: "2px solid #7C5DFA",
    width: "15rem",
    marginBottom: "1rem",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      filter: "brightness(1.2)",
    },
    "&:nth-of-type(2)": {
      backgroundColor: "white",
      color: "#7C5DFA",
    },
  },
  vertical__divider: {
    display: "none",
  },
  group__heading: {
    marginTop: "3rem",
    paddingLeft: "1.5rem",
    fontWeight: "800",
    color: "rgba(0,0,0,0.2)",
  },
  basic__info: {
    display: "grid",
  },
  preferences__unit: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "4rem",
  },
  themeSwitch: {
    display: "flex",
    alignItems: "center",
  },
  delete__account: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "1rem 0",
    color: "#EC5757",
    fontWeight: "700",
  },
  delete__btn: {
    width: "10rem",
    maxWidth: "15rem",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    border: "none",
    backgroundColor: "black",
    "& p": {
      marginLeft: "1rem",
    },
  },
  settings__main: {},

  ///MEDIA QUERIES
  ///MEDIA QUERIES
  "@media(min-width: 45rem)": {
    Settings: {
      padding: "0",
      margin: "5rem 0",
    },
    goBack: {
      margin: "0 22%",
    },
    wrapper: {
      width: "90%",
    },
    basic__info: {
      gridTemplateRow: "repeat(1fr, 3)",
      gridTemplateColumn: "1fr 1fr",
      gridGap: "1rem",
      "& div:nth-of-type(1)": {
        gridColumn: "1/2",
        gridRow: "1/2",
      },

      "& div:nth-of-type(2)": {
        gridColumn: "2/3",
        gridRow: "1/2",
      },
      "& div:nth-of-type(3)": {
        gridColumn: "1/3",
        gridRow: "2/3",
      },
      "& button": {
        width: "100%",
        gridColumn: "2/3",
        gridRow: "3/4",
      },
    },

    password: {
      display: "flex",
      justifyContent: "space-between",
      "& button": {
        width: "100%",
        marginTop: "1rem",
      },
    },
  },

  "@media(min-width: 64rem)": {
    wrapper: {
      width: "80%",
      marginLeft: "6rem",
      display: "flex",
      justifyContent: "space-between",
    },
    vertical__divider: {
      display: "block",
      width: "0.1rem",
      height: "70rem",
      margin: "0 2rem",
      backgroundColor: "rgba(0,0,0,0.08)",
      position: "relative",
      top: "5rem",
    },
    settings__main: {},
  },

  "@media(min-width: 80rem)": {
    wrapper: {
      width: "65%",
    },
  },
});

export default SettingsStyles;
