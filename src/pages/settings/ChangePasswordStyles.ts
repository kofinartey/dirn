import { makeStyles } from "@mui/styles";

const ChangePasswordStyles = makeStyles({
  formControl: {
    position: "relative",
    marginBottom: "0.8rem",
  },
  label: {
    fontSize: "0.75rem",
    // color: darkTheme ? "white" : "#7E88C3",
    fontWeight: "500",
  },
  input: {
    outline: "none",
    width: "100%",
    minWidth: "1rem",
    flexGrow: "1",
    border: "2px solid #DFE3FA",
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
  },

  ///MEDIA QUERIES
  ///MEDIA QUERIES
  "@media(min-width: 48rem)": {
    password: {
      display: "flex",
      justifyContent: "space-between",
      "& form": {
        width: "60%",
      },
      "& button": {
        width: "100%",
        marginTop: "1rem",
      },
    },
  },
});

export default ChangePasswordStyles;
