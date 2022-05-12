import { makeStyles } from "@mui/styles";

const SelectImageStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    backgroundColor: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(5px)",
    top: 0,
    zIndex: 1,
  },
  modal: {
    width: "90%",
    maxWidth: "40rem",
  },
  form: {
    padding: "4rem",
    width: "90%",
    "& input": {
      display: "none",
      width: "100%",

      "&::-webkit-file-upload-button": {
        borderStyle: "none",
        padding: "0.5rem",
        fontSize: "1rem",
      },
      "&::-webkit-file-upload-text": {
        position: "relative",
        right: 0,
        color: "red",
        backgroundColor: "red",
      },
    },
  },
  label: {
    backgroundColor: "red",
    "& div": {
      padding: "0 0  0 1rem",
      backgroundColor: "rgba(0,0,0,0.1)",
      borderRadius: "0.5rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      " & p": {
        fontWeight: "bold",
        padding: "0.5rem 1rem",
        border: "2px solid black",
        borderRadius: "0 0.5rem 0.5rem 0",
        backgroundColor: "black",
        color: "white",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
  },
  choose: {
    //   backgroundColor: "red",
  },
  button__section: {
    display: "flex",
    flexDirection: "column",
    marginTop: "2rem",
    "& button": {
      marginBottom: "0.5rem",
    },
  },
});

export default SelectImageStyles;
