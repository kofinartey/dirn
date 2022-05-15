//package imports
import React, { useState, memo } from "react";
import { useAppSelector, useAppDispatch } from "../../utils/redux";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import dayjs from "dayjs";

//my imports
import Form from "../../components/form/Form";
import GoBack from "../../components/go_back/GoBack";
import Card from "../../components/card/Card";
import StatusCard from "../../components/statusCard/StatusCard";
import DeleteConfirmation from "../../components/delete_confirmation/DeleteConfirmation";
import { toggleForm } from "../../state/form_display/formDisplaySlice";
import {
  toggleDeleteInvoice,
  hideDeleteConfirmation,
} from "../../state/delete_confirmation/deleteConfirmation";
// import { toggleConfirmation } from "../../redux/delete_confirmation/deleteConfirmationActions";
// import { patchStatus } from "../../redux/invoice/invoiceActions";
import { markInvoiceActionCreator } from "../../state/invoices/invoices";
import formatAmount from "../../helper_functions/formatAmount";
import InvoiceDetailsStyles from "./InvoiceDetailsStyles";
import leftArrow from "../../assets/icon-arrow-left.svg";
import Button from "../../components/button/Button";
import Text from "../../components/text/Text";
// import InvoiceForm from "../invoice_form/InvoiceForm";

const detailsVariants = {
  hidden: {
    x: 1000,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.5 },
  },
  exit: {
    x: "1000vw",
    transition: { ease: "easeInOut" },
  },
};

function InvoiceDetails() {
  const params = useParams();
  const id = params.id;
  const classes = InvoiceDetailsStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const invoiceData = useAppSelector((state) => state.invoices.invoices);
  const invoice = invoiceData.find((invoice) => invoice.id === id);
  const darkTheme = useAppSelector((state) => state.darkTheme);
  const deleteConfirmation = useAppSelector(
    (state) => state.deleteConfirmation
  );
  const currency = useAppSelector(
    (state) => state.user.userInfo.settings.currency
  );
  const formDisplay = useAppSelector((state) => state.formDisplay);
  const formatDate = (date: string) => {
    return dayjs(date).format("DD MMM YYYY");
  };

  const handleMarkAsPaid = () => {
    dispatch(markInvoiceActionCreator({ id: invoice!.id }));
    //TODO
    // dispatch(patchStatus(_id));
  };
  return (
    // PAGE LAYOUT
    //
    <>
      {/* edit form component. To be show when "Edit" button is clicked */}
      <div style={{ position: "fixed", left: "5rem", width: "100%" }}>
        {formDisplay && <Form values={invoice} />}
      </div>

      {/* Invoice Details */}
      <motion.div
        className={classes.InvoiceDetails}
        style={{
          backgroundColor: darkTheme ? "#141625" : "",
          overflowY: "hidden",
        }}
        variants={detailsVariants}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className={classes.wrapper}>
          <>
            <GoBack />
          </>
          {deleteConfirmation.visible && (
            <DeleteConfirmation
              id={invoice!.id}
              // _id={invoice._id}
              // history={props.history}
            />
          )}

          <Card>
            <div className={classes.top_card}>
              <div className={classes.status__wrapper}>
                <p>Status</p>
                <StatusCard status={invoice!.status}>
                  {invoice!.status}
                </StatusCard>
              </div>

              {/* buttons to show in status bar at larger screen widths */}
              <div className={classes.top_card__buttons}>
                <Button
                  color="#7E88C3"
                  backgroundColor={darkTheme ? "#252945" : "#F9FAFE"}
                  onClick={() => {
                    dispatch(toggleForm());
                  }}
                >
                  Edit
                </Button>
                <Button
                  color="white"
                  backgroundColor="#EC5757"
                  onClick={() => {
                    dispatch(toggleDeleteInvoice());
                  }}
                >
                  Delete
                </Button>
                {invoice!.status === "pending" && (
                  <Button
                    color="white"
                    backgroundColor="#7C5DFA"
                    onClick={handleMarkAsPaid}
                  >
                    Mark as Paid
                  </Button>
                )}
              </div>
            </div>
          </Card>

          {/* main card with invoice details and breakdown */}
          <Card>
            <div className={classes.details_card}>
              <div className={classes.id}>
                <h4 style={{ color: darkTheme ? "white" : "" }}>
                  <span>#</span>
                  {invoice!.id}
                </h4>
                <p>{invoice!.description}</p>
              </div>

              {/* sender's details */}
              <div className={classes.senders_details}>
                <p>{invoice!.senderAddress.street}</p>
                <p>{invoice!.senderAddress.city}</p>
                <p>{invoice!.senderAddress.postCode}</p>
                <p>{invoice!.senderAddress.country}</p>
              </div>

              {/* invoice date */}
              <div className={classes.invoice_date}>
                <p>Invoice Date</p>
                <h4 style={{ color: darkTheme ? "white" : "" }}>
                  {formatDate(invoice!.createdAt)}
                </h4>
              </div>

              {/* payment date */}
              <div className={classes.payment_date}>
                <p>Payment Due</p>
                <h4 style={{ color: darkTheme ? "white" : "" }}>
                  {formatDate(invoice!.paymentDue)}
                </h4>
              </div>

              {/* client details */}
              <div className={classes.client_details}>
                <p>Bill To</p>
                <h4 style={{ color: darkTheme ? "white" : "" }}>
                  {invoice!.clientName}
                </h4>
                <p>{invoice!.clientAddress.street}</p>
                <p>{invoice!.clientAddress.city}</p>
                <p>{invoice!.clientAddress.postCode}</p>
                <p>{invoice!.clientAddress.country}</p>
              </div>

              {/* client email */}
              <div className={classes.client_email}>
                <p>Sent to</p>
                <h4 style={{ color: darkTheme ? "white" : "" }}>
                  {invoice!.clientEmail}
                </h4>
              </div>

              {/* project pricing details. Render diffrent entities depending on page width*/}
              <div
                className={classes.pricing}
                style={{
                  backgroundColor: darkTheme ? "#252945" : "",
                }}
              >
                {/* pricing section on mobile */}
                <section className={classes.pricing__mobile}>
                  {invoice!.items!.map((item) => (
                    <div className={classes.item} key={item.name}>
                      <Text as="h5">{item.name}</Text>
                      <Text as="h5">
                        {item.quantity} x £{item.price.toFixed(2)}
                      </Text>
                      <Text as="h5">
                        {currency}
                        {item.total.toFixed(2)}
                      </Text>
                    </div>
                  ))}
                </section>

                {/* pricing section on desktop */}
                <section className={classes.pricing__desktop}>
                  <div className={classes.item_thead}>
                    <p>Item Name</p>
                    <p>QTY.</p>
                    <p>Price</p>
                    <p>Total</p>
                  </div>
                  {invoice!.items!.map((item) => {
                    return (
                      <div className={classes.item_tbody} key={item.name}>
                        <Text as="h5">{item.name}</Text>
                        <Text as="h5">{item.quantity}</Text>
                        <Text as="h5">
                          {currency} {formatAmount(item.price.toFixed(2))}
                        </Text>
                        <Text as="h5">
                          {currency}{" "}
                          {item.total && formatAmount(item.total.toFixed(2))}
                        </Text>
                      </div>
                    );
                  })}
                </section>

                <div
                  className={classes.grandTotal}
                  style={{
                    backgroundColor: darkTheme ? "#0C0E16" : "",
                  }}
                >
                  <p>Amount Due</p>
                  <h3>
                    {currency}{" "}
                    {invoice!.total && formatAmount(invoice!.total.toFixed(2))}
                  </h3>
                </div>
              </div>
            </div>
          </Card>

          {/* to be displayed on smaller screen sizes */}
          <footer
            className={classes.footer}
            style={{ backgroundColor: darkTheme ? "#1E2139" : "" }}
          >
            <Button
              color="#7E88C3"
              backgroundColor={darkTheme ? "#252945" : "#F9FAFE"}
              onClick={() => {
                dispatch(toggleForm());
              }}
            >
              Edit
            </Button>
            <Button
              color="white"
              backgroundColor="#EC5757"
              onClick={() => {
                dispatch(toggleDeleteInvoice());
              }}
            >
              Delete
            </Button>
            {invoice!.status === "pending" && (
              <Button
                color="white"
                backgroundColor="#7C5DFA"
                onClick={handleMarkAsPaid}
              >
                Mark as Paid
              </Button>
            )}
          </footer>
        </div>
      </motion.div>
    </>
  );
}

export default memo(InvoiceDetails);
