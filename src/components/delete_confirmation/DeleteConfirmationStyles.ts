import { makeStyles } from "@mui/styles";

const DeleteComfirmationStyles = makeStyles({
  overlay: {
    width: "100%",
    height: "100%",
    position: "fixed",
    top: "0",
    left: 0,
    botton: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
    // opacity: "1",
    // pointerEvents: "none",
    transition: "all .5s ease-in-out",
  },

  deleteCard: {
    width: "90%",
    maxWidth: "30rem",
    "& h2": {
      marginTop: "1rem",
      marginBottom: "1rem",
    },
    "& p": {
      lineHeight: "1.5rem",
      // marginBottom: "2rem",
      "& span": {
        color: "red",
        fontWeight: "bold",
      },
    },
    "& $btn_container": {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
    },
  },
  btn_container: {
    marginTop: "2rem",
  },
});

export default DeleteComfirmationStyles;
