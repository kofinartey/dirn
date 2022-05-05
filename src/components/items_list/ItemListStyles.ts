import { makeStyles } from "@mui/styles";

const ItemListStyles = makeStyles({
  ItemList: {
    marginTop: "6rem",
    "& h2": {
      color: "#777F98",
      marginBottom: "2rem",
    },
  },
  form: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gridGap: "1rem",
    marginBottom: "1rem",
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
    "& h4": {
      marginTop: "1.5rem",
    },
  },
  button: {
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
    fontSize: "0.8rem",
  },
  "@media(min-width: 48rem)": {
    form: {
      gridTemplateColumns: "3fr 1fr 2fr 1fr",
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
  },
});

export default ItemListStyles;
