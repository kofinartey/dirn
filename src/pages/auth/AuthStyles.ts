import { makeStyles } from "@mui/styles";
import colors from "../../utils/colors";

const AuthStyles = makeStyles({
  Auth: {
    width: "100%",
    // maxWidth: "25rem",
    height: "100vh",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    display: "flex",
    marginBottom: "2rem",
    "& img": {
      width: "3.5rem",
      height: "3.5rem",
    },
    "& p": {
      fontFamily: "Montserrat",
      fontWeight: 800,
      fontSize: "3rem",
      marginLeft: "1rem",
    },
  },
  wrapper: {
    // backgroundColor: "red",
    width: "90%",
    maxWidth: "25rem",
    backgroundColor: "white",
    borderRadius: "1rem",
    padding: "4rem 2rem",
    boxShadow: "0 5px 20px rgba(0,0,0,0.07)",
  },
  form: {
    width: "100%",
    position: "relative",
    right: "0",
    bottom: "0",
  },
  switch: {
    fontSize: "0.75rem",
    margin: "1rem 0",
    "& span": {
      fontWeight: "bold",
      color: "#7C5DFA",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  authError: {
    backgroundColor: colors.red.light,
    padding: " 1rem",
    fontSize: "0.8rem",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  formControl: {
    position: "relative",
    marginBottom: "0.8rem",
  },
  names: {
    display: "flex",
    gap: "1rem",
  },
  input: {
    outline: "none",
    width: "100%",
    minWidth: "1rem",
    flexGrow: "1",
    // border: "2px solid #DFE3FA",
    borderRadius: "0.3rem",
    padding: "0.9rem",
    marginTop: "0.75rem",

    "&:focus": {
      border: "2px solid #7C5DFA",
    },
    "&::placeholder": {
      color: "rgba(0,0,0,0.2)",
    },
  },
  error: {
    color: "#EC5757",
    position: "absolute",
    fontSize: "0.75rem",
    top: "0",
    right: "0",
  },
  button: {
    width: "100%",
    borderStyle: "none",
    padding: "1rem",
    backgroundColor: "#7C5DFA",
    color: "white",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
  trial: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "1rem",
    "& p": {
      fontSize: "0.8rem",
      textAlign: "center",
      marginBottom: "0.5rem",
    },
    "& button": {
      // width: "60%",
      border: "2px solid lightgrey",
      color: "black",
      backgroundColor: "lightgrey",
      "&:hover": {
        color: "grey",
        background: "none",
      },
    },
  },
  spinner: {
    height: "2rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
});

export default AuthStyles;
