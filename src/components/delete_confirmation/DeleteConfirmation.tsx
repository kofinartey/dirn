import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useAppSelector, useAppDispatch } from "../../utils/redux";

//my imports

import { removeInvoiceActionCreator } from "../../state/invoices/invoices";
import { toggleDeleteConfirmation } from "../../state/delete_confirmation/deleteConfirmation";
// import {
//   deletedNotification,
//   hideNotification,
// } from "../../redux/notification/notificationReducer";
import Input from "../form_elements/Input";
import Card from "../card/Card";
import Button from "../button/Button";
import DeleteComfirmationStyles from "./DeleteConfirmationStyles";
import Text from "../text/Text";

type DeleteConfirmationProps = {
  deleteType: "invoice" | "all_invoices" | "account";
  id: string;
  _id?: string;
};

function DeleteConfirmation({ deleteType, id, _id }: DeleteConfirmationProps) {
  const classes = DeleteComfirmationStyles();
  const darkTheme = useAppSelector((state) => state.darkTheme);
  const deleteConfirmation = useAppSelector(
    (state) => state.deleteConfirmation
  );
  const user = useAppSelector((state) => state.user.userInfo);
  const dispatch = useAppDispatch();

  const [btnDisabled, setBtnDisabled] = useState(false);
  const [confirmText, setConfirmText] = useState("");

  // useEffect(() => {
  //   if (deleteConfirmation) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  // }, [deleteConfirmation]);

  //value to check user input against
  const textTarget = `${user.firstName.toLowerCase()}/#${id}`;

  useEffect(() => {
    if (confirmText.trim() === textTarget) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [confirmText]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmText(event.target.value);
  };

  const handleDelete = () => {
    if (confirmText.trim() === textTarget) {
      console.log("equal");
      dispatch(removeInvoiceActionCreator({ id: id }));
      //TODO: change after implementing backend
      // dispatch(removeInvoiceActionCreator(props._id));
    } else {
      console.log("not equal");
    }

    // setTimeout(() => {
    //   props.history.push("/main");
    //   dispatch(toggleConfirmation());
    // }, 300);
    // dispatch(deletedNotification());
    // setTimeout(() => {
    //   dispatch(hideNotification());
    // }, 2000);
  };

  const invoiceInstruction = (
    <>
      <Text as="p">Are you sure you want to delete invoice #{id}?</Text>
      <Text as="p">This action cannot be undone.</Text>
      <p>
        Please type{" "}
        <span>
          {user.firstName.toLowerCase()}/#{id}
        </span>{" "}
        to confirm
      </p>
    </>
  );

  const allInvoicesInstruction = (
    <>
      <Text as="p">Are you sure you want to delete ALL INVOICES?</Text>
      <Text as="p">This action cannot be undone.</Text>
      <p>Please type password to confirm.</p>;
    </>
  );

  const instruction =
    deleteType === "invoice" ? invoiceInstruction : allInvoicesInstruction;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div
        className={classes.overlay}
        onClick={() => {
          dispatch(toggleDeleteConfirmation());
        }}
      >
        <div
          className={classes.deleteCard}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Card>
            <Text as="h2">Comfirm Deletion</Text>

            {instruction}
            <Input value={confirmText} onChange={handleChange} />

            <div className={classes.btn_container}>
              <Button
                color="#7E88C3"
                backgroundColor={darkTheme ? "#252945" : "#F9FAFE"}
                onClick={() => {
                  dispatch(toggleDeleteConfirmation());
                }}
              >
                CANCEL
              </Button>
              <Button
                color="white"
                backgroundColor="#EC5757"
                onClick={handleDelete}
                disabled={btnDisabled}
              >
                {deleteType === "invoice"
                  ? "DELETE"
                  : deleteType === "all_invoices"
                  ? "DELETE ALL INVOICES"
                  : "DELETE ACCOUNT"}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}

export default DeleteConfirmation;
