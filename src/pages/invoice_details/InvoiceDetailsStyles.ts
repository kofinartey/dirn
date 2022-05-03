import { makeStyles } from "@mui/styles";

const InvoiceDetailsStyles = makeStyles({
  InvoiceDetails: {
    backgroundColor: "#F8F8FB",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "4.5rem",
    width: "100%",
    // overflowX: "hidden",
    "& p": {
      fontSize: "0.75rem",
      fontWeight: "500",
      color: "#7E88C3",
    },
  },

  wrapper: {
    width: "90%",
    paddingTop: "3rem",
  },

  top_card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& button": {
      margin: "0 0.5rem",
    },
  },
  top_card__buttons: {
    display: "none",
  },
  status__wrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& p:nth-of-type(1)": {
      marginRight: "1rem",
    },
  },
  details_card: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "repeat(6, 1fr)",
    "& p": {
      marginBottom: ".5rem",
    },
  },
  id: {
    gridColumn: "1/3",
    gridRow: "1/2",
    "& h4": {
      marginBottom: "0.2rem",
      "& span": {
        color: "#7E88C3",
      },
    },
  },
  senders_details: {
    gridColumn: "1/3",
    gridRow: "2/4",
  },
  invoice_date: {
    gridColumn: "1/2",
    gridRow: "4/5",
    "& p": {
      marginBottom: "1rem",
    },
  },
  payment_date: {
    gridColumn: "1/2",
    gridRow: "5/6",
    "& p": {
      marginBottom: "1rem",
    },
  },
  client_details: {
    gridColumn: "2/3",
    gridRow: " 4/6",
    "& h4": {
      marginBottom: "1rem",
    },
  },
  client_email: {
    gridColumn: "1/3",
    gridRow: "6/7",
    marginTop: "1rem",
  },
  pricing: {
    width: "100%",
    gridColumn: "1/3",
    margin: "2rem 0",
    backgroundColor: "#F9FAFE",
    borderRadius: "0.5rem",
  },
  pricing__mobile: {},
  pricing__desktop: {
    display: "none",
  },

  item: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    padding: "1rem",
    "& h5:nth-of-type(1)": {
      gridColumn: "1/2",
      gridRow: "1/2",
      marginBottom: "0.5rem",
    },
    "& h5:nth-of-type(2)": {
      gridColumn: "1/2",
      gridRow: "2/3",
      color: "#7E88C3",
      alignSelf: "center",
    },
    "& h5:nth-of-type(3)": {
      gridColumn: "2/3",
      gridRow: "1/3",
      alignSelf: "center",
      justifySelf: "end",
    },
  },
  grandTotal: {
    backgroundColor: "#373B53",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem 1rem",
    color: "white",
    borderRadius: " 0 0 0.5rem 0.5rem",
    "& p": {
      color: "white",
      paddingTop: "0.2rem",
    },
    "& h3": {
      fontSize: "1.25rem",
    },
  },
  item_thead: {
    display: "grid",
    gridTemplateColumns: "3fr 1fr 2fr 2fr",
    padding: "1rem 2rem",

    "& p:nth-of-type(2)": {
      justifySelf: "center",
    },
    "& p:nth-of-type(3)": {
      justifySelf: "end",
    },
    "& p:nth-of-type(4)": {
      justifySelf: "end",
    },
  },
  item_tbody: {
    display: "grid",
    gridTemplateColumns: "3fr 1fr 2fr 2fr",
    padding: "1rem 2rem",
    "& h5:nth-of-type(2)": {
      justifySelf: "center",
    },
    "& h5:nth-of-type(3)": {
      justifySelf: "end",
    },
    "& h5:nth-of-type(4)": {
      justifySelf: "end",
    },
  },

  itemError: {
    color: "#EC5757",
  },
  footer: {
    width: "100%",
    backgroundColor: "white",
    padding: "2rem",
    marginTop: "2rem",
    "& button": {
      margin: "0 0.5rem",
    },
  },

  //   ****** MEDIA QUERY 48rem ******
  "@media(min-width:48rem)": {
    status__wrapper: {
      width: "auto",
      justifyContent: "flex-start",
    },
    top_card__buttons: {
      display: "block",
    },
    details_card: {
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(3, 1fr)",
    },
    id: {
      gridColumn: "1/2",
      gridrow: "1/2",
    },
    senders_details: {
      gridColumn: "3/4",
      gridRow: "1/2",
      justifySelf: "end",
      textAlign: "end",
    },
    invoice_date: {
      gridColumn: "1/2",
      gridRow: "2/3",
    },
    payment_date: {
      gridColumn: "1/2",
      gridRow: "3/4",
    },
    client_details: {
      gridColumn: "2/3",
      gridRow: "2/4",
    },
    client_email: {
      gridColumn: "3/4",
      gridRow: "2/4",
    },
    pricing: {
      gridColumn: "1/4",
    },
    pricing__mobile: {
      display: "none",
    },
    pricing__desktop: {
      display: "block",
    },
    grandTotal: {
      padding: "1.5rem 2rem",
      "& h3": {
        fontSize: "1.5rem",
      },
    },
    footer: {
      display: "none",
    },
  },

  //   ****** MEDIA QUERY 64rem ******
  "@media(min-width:64rem)": {
    InvoiceDetails: {
      marginTop: "0",
    },
    wrapper: {
      width: "70%",
      margin: "3rem 0 2rem 5rem",
      padding: "0",
    },
  },
  //   ****** MEDIA QUERY 64rem ******
  "@media(min-width:90rem)": {
    wrapper: {
      width: "50%",
    },
  },
});

export default InvoiceDetailsStyles;
