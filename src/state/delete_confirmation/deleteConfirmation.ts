import { createSlice } from "@reduxjs/toolkit";

type DeleteConfirmationType = {
  visible: boolean;
  deleteType: "" | "invoice" | "all-invoices" | "account";
};

const initialState: DeleteConfirmationType = {
  visible: false,
  deleteType: "",
};

const deleteConfirmationSlice = createSlice({
  name: "deleteConfirmation",
  initialState,
  reducers: {
    toggleDeleteInvoice: (state) => {
      return {
        visible: true,
        deleteType: "invoice",
      };
    },
    toggleDeleteAllInvoice: (state) => {
      return {
        visible: true,
        deleteType: "all-invoices",
      };
    },
    toggleDeleteAccount: (state) => {
      return {
        visible: true,
        deleteType: "account",
      };
    },
    hide: () => {
      return initialState;
    },
  },
});

export const {
  toggleDeleteInvoice,
  toggleDeleteAllInvoice,
  toggleDeleteAccount,
  hide: hideDeleteConfirmation,
} = deleteConfirmationSlice.actions;

export default deleteConfirmationSlice;
