import { makeStyles } from "@mui/styles";

const DirnAppStyles = makeStyles({
  InvoiceApp: {
    display: "flex",
    flexDirection: "column",
    overflowX: "hidden",
    transition: "all .3s ease-out",
    "&::-webkit-scrollbar": {
      width: ".5rem",
      height: "2rem",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#7C5DFA",
      borderRadius: "3rem",
    },
  },
  Appbar: {
    width: "100%",
    position: "fixed",
    zIndex: "1000",
    top: 0,
  },

  notification: {
    position: "absolute",
    right: "4rem",
    bottom: "4rem",
  },

  "@media(min-width: 64rem)": {
    InvoiceApp: {
      flexDirection: "row",
      minHeight: "100vh",
    },
    Appbar: {
      width: "0",
      position: "fixed",
    },
  },
});

export default DirnAppStyles;
