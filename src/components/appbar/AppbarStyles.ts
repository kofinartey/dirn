import { makeStyles } from "@mui/styles";

const AppbarStyles = makeStyles({
  Appbar: {
    width: "100%",
    height: "4.5rem",
    backgroundColor: "#373B53",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "color .3s ease-in-out",
  },
  logo__container: {
    width: "4.5rem",
    height: "100%",
    backgroundColor: "hsl(252, 94%, 67%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0 1.5rem 1.5rem 0",
  },
  theme__user: {
    display: "flex",
    alignItems: "center",
  },
  container: {
    width: "4.5rem",
    height: "100%",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      cursor: "pointer",
    },
  },
  divider: {
    width: "1px",
    height: "4.5rem",
    backgroundColor: "#494E6E",
  },

  "@media(min-width: 48rem)": {
    Appbar: {
      height: "5rem",
    },
    container: {
      width: "5rem",
    },
    divider: {
      height: "5rem",
    },
  },

  "@media(min-width: 64rem)": {
    Appbar: {
      width: "6.4375rem",
      height: "100vh",
      flexDirection: "column",

      borderRadius: "0 1.5rem 1.5rem 0",
    },
    logo__container: {
      width: "100%",
      height: "6.4375rem",
    },
    theme__user: {
      width: "100%",
      flexDirection: "column",
    },
    divider: {
      width: "100%",
      height: "1px",
      backgroundColor: "#494E6E",
    },
    container: {
      height: "6.4375rem",
      width: "100%",
    },
  },
});

export default AppbarStyles;
