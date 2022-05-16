import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../utils/redux";

//my imports
import formatAmount from "../../helper_functions/formatAmount";
import InvoiceStyles from "./InvoiceStyles";
import arrowRight from "../../assets/icons/icon-arrow-right.svg";
import StatusCard from "../statusCard/StatusCard";
import { InvoiceInterface } from "../../types";

type InvoiceProps = {
  data: InvoiceInterface;
};

function Invoice({ data }: InvoiceProps) {
  const classes = InvoiceStyles();
  const darkTheme = useAppSelector((state) => state.darkTheme);
  //   const currency = useSelector(
  //     (state) => state.user.userInfo.settings.currency
  //   );

  //add commas to amount

  //// ***** MAIN FUNCTION RENDER ******
  return (
    <Link
      // TODO
      // to={`/invoice/${data._id}/${data.id}`}
      to={`/invoice/${data._id}/${data.id}`}
      className={classes.Invoice}
      style={{
        backgroundColor: darkTheme ? "#1E2139" : "",
        color: darkTheme ? "white" : "",
      }}
    >
      <h5 className={classes.id}>
        <span>#</span>
        {data.id}
      </h5>
      <p className={classes.clientName}>{data.clientName}</p>
      <p className={classes.date}>Due {data.paymentDue}</p>
      <h4 className={classes.amount}>
        $ {data.total && formatAmount(data.total.toFixed(2))}
      </h4>
      {/* <h4 className={classes.amount}>
        {currency} {data.total && formatAmount(data.total.toFixed(2))}
      </h4> */}

      <div className={classes.status}>
        <StatusCard status={data.status}>{data.status}</StatusCard>
      </div>

      <div className={classes.arrowRight}>
        <img src={arrowRight} alt="" />
      </div>
    </Link>
  );
}

export default React.memo(Invoice);
