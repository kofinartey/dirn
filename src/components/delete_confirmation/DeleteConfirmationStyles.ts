import { makeStyles } from "@mui/styles";
import colors from "../../utils/colors";

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
    zIndex: 2,
  },

  deleteCard: {
    width: "80%",
    maxWidth: "30rem",
    "& h2": {
      marginTop: "1rem",
      marginBottom: "1rem",
    },
    "& p": {
      lineHeight: "1.5rem",
      fontSize: "0.8rem",
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
  highlight: {
    fontSize: "1rem",
    color: colors.red.light,
  },
  btn_container: {
    marginTop: "2rem",
  },
});

export default DeleteComfirmationStyles;
