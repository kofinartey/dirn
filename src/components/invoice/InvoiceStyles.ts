import { makeStyles } from "@mui/styles";

const InvoiceStyles = makeStyles({
  Invoice: {
    // height: "8.375rem",
    backgroundColor: "white",
    margin: "1rem 0",
    padding: "1.5rem",
    borderRadius: ".5rem",
    border: "2px solid rgba(0,0,0,0)",
    boxShadow: "-3px 21px 27px -10px rgba(136,142,176,0.05)",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: " 1fr 1fr",
    "&:hover": {
      cursor: "pointer",
      border: "2px solid #7C5DFA",
    },
  },

  id: {
    fontSize: "0.75rem",
    gridColumn: "1/2",
    "& span": {
      color: "hsl(231, 20%, 61%)",
    },
  },
  clientName: {
    fontSize: "0.75rem",
    fontWeight: "500",
    color: "hsl(231, 20%, 61%)",
    gridColumn: "2/4",
    justifySelf: "end",
  },

  date: {
    color: "hsl(231, 20%, 61%)",
    fontSize: ".75rem",
    fontWeight: "500",
    gridColumn: "1/2",
    gridRow: "2/3",
  },
  amount: {
    gridColumn: "1/2",
    gridRow: "2/3",
    alignSelf: "end",
  },
  status: {
    gridColumn: "2/3",
    gridRow: "2/3",
    justifySelf: "end",
  },
  arrowRight: {
    display: "none",
  },

  "@media(min-width: 48rem)": {
    Invoice: {
      gridTemplateColumns: "15% 1fr 1fr 1fr 1fr 2rem",
      gridTemplateRows: "1fr",
    },
    id: {
      gridColumn: "1/2",
      gridRow: "1/2",
      alignSelf: "center",
    },
    date: {
      gridColumn: "2/3",
      gridRow: "1/2",
      alignSelf: "center",
    },
    clientName: {
      gridColumn: "3/4",
      gridRow: "1/2",
      alignSelf: "center",
      justifySelf: "start",
    },
    amount: {
      gridColumn: "4/5",
      gridRow: "1/2",
      alignSelf: "center",
      justifySelf: "end",
    },
    status: {
      gridColumn: "5/6",
      gridRow: "1/2",
      alignSelf: "center",
    },
    arrowRight: {
      display: "block",
      gridColumn: "7/8",
      gridRow: "1/2",
      alignSelf: "center",
    },
  },
});

export default InvoiceStyles;
