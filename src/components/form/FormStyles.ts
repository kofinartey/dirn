import { makeStyles } from "@mui/styles";

const FormStyles = makeStyles({
  FormContent: {
    width: "100%",
    height: "100%",
    position: "fixed",
    top: "4.5rem",
    // left: "-100rem",
    left: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3rem 0",
    transition: "all .3s ease-in-out",
    backgroundColor: "white",
  },
  overlay: {
    width: "100%",
    height: "100%",
    position: "fixed",
    top: "0",
    left: "0",
    backgroundColor: "rgba(0,0,0,0.5)",
    // opacity: "0",
    // pointerEvents: "none",
    // transition: "all .5s ease-in-out",
  },
  wrapper: {
    height: "80vh",
    width: "90%",
    paddingRight: "1rem",
    paddingBottom: "2rem",
    overflowY: "scroll",
    "& div:nth-of-type(1)": {
      cursor: "pointer",
    },
    "&::-webkit-scrollbar": {
      width: ".5rem",
      height: "2rem",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#DFE3FA",
      borderRadius: "3rem",
    },
  },
  goBack: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1.75rem",
    "& img": {
      marginRight: "1rem",
    },
  },
  form__heading: {
    marginBottom: "1.75rem",
  },
  group__heading: {
    fontSize: "0.75rem",
    color: "#7C5DFA",
    margin: "2rem 0 1.75rem 0",
  },
  form__control: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1.75rem",
  },

  city_post_country: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gridGap: "1rem",
    "& div:nth-of-type(3)": { gridColumn: "1/3", girdRow: "2/3" },
  },

  // ITEM LIST STYLES
  itemList: {
    marginTop: "6rem",
    "& h2": {
      color: "#777F98",
      marginBottom: "2rem",
    },
  },
  Item: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gridGap: "1rem",
    "& div:nth-of-type(1)": {
      gridColumn: "1/5",
      gridRow: "1/2",
    },
    "& div:nth-of-type(2)": {
      gridColumn: "1/2",
      gridRows: "2/3",
    },
  },

  total: {
    marginTop: "1rem",
    color: "#888EB0",
  },
  delete: {
    alignSelf: "center",
    justifySelf: "end",
    width: "0.75rem",
    height: "1rem",
    paddingTop: "0.8rem",

    cursor: "pointer",
  },
  itemList__button: {
    width: "100%",
    fontSize: "0.75rem",
    fontWeight: "bold",
    padding: "1rem",
    borderRadius: "2rem",
    border: "none",
    color: "#7E88C3",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#DFE3FA",
    },
  },
  itemError: {
    color: "#EC5757",
    fontSize: "0.75rem",
    margin: "2rem 0 0 2rem",
  },
  shadow: {
    width: "150%",
    height: "4rem",
    backgroundColor: "red",
  },
  footer: {
    width: "100%",
    height: "90px",
    marginTop: "4rem",
  },
  new_footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // boxShadow: "0px 5px 100px 17px rgba(0,0,0,0.43)",
    "& button": {
      margin: "0.2rem",
    },
  },

  //MEDIA QUERIES
  //MEDIA QUERIES
  //MEDIA QUERIES
  "@media(min-width:48rem)": {
    FormContent: {
      width: "80%",
      top: "5rem",
      left: "5rem",
      borderRadius: "0 1.5rem 1.5rem 0",
    },
    city_post_country: {
      gridTemplateColumns: "1fr 1fr 1fr",
      gridTemplateRows: "1fr",
      "& div:nth-of-type(1)": { gridColumn: "1/2", gridRow: "1/2" },
      "& div:nth-of-type(2)": { gridColumn: "2/3", gridRow: "1/2" },
      "& div:nth-of-type(3)": { gridColumn: "3/4", girdRow: "1/2" },
    },
    pay__date: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridGap: "1rem",
      "& div:nth-of-type(1)": { gridColumn: "1/2" },
      "& div:nth-of-type(2)": { gridColumn: "2/3" },
    },
    Item: {
      gridTemplateColumns: "3fr 1fr 2fr 1fr 1fr",
      gridTemplateRows: "1fr ",
      "& div:nth-of-type(1)": {
        gridColumn: "1/2",
        gridRow: "1/2",
      },
      "& div:nth-of-type(2)": {
        gridColumn: "2/3",
        gridRow: "1/2",
      },
      "& div:nth-of-type(3)": {
        gridColumn: "3/4",
        gridRow: "1/2",
      },
      "& div:nth-of-type(4)": {
        gridColumn: "4/5",
        gridRow: "1/2",
      },
      "& div:nth-of-type(5)": {
        gridColumn: "5/6",
        gridRow: "1/2",
      },
    },
    new_footer: {
      display: "grid",
      gridTemplateColumns: "1fr 2fr 1fr 1fr",
      "& button": {
        width: "auto",
        "&:nth-of-type(2)": {
          gridColumn: "3/4",
        },
      },
    },
    edit_footer: {
      display: "grid",
      gridGap: "1rem",
      // justifyContent: "flex-end",
      gridTemplateColumns: "2fr 1fr 1fr",
      "& button": {
        "&:nth-of-type(1)": {
          gridColumn: "2/3",
        },
        "&:nth-of-type(2)": {
          gridColumn: "3/4",
        },
      },
    },
  },
  "@media(min-width:64rem)": {
    FormContent: {
      height: "100vh",
      width: "60%",
      top: "0",
      paddingLeft: "1.5rem",
      // left: "6.4375rem",
    },
    wrapper: {
      height: "90vh",
    },
  },
  "@media(min-width:90rem)": {
    FormContent: {
      width: "50%",
    },
  },
});

export default FormStyles;
