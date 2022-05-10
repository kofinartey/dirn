import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../../data.json";
import { InvoiceInterface } from "../../types";

//TODO:
// const initialState: InvoiceInterface[] = [];
const initialState: InvoiceInterface[] = data;

const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<InvoiceInterface>) => {
      state.unshift(action.payload);
    },
    edit: (state, action: PayloadAction<InvoiceInterface>) => {
      console.log("edit called");
      let toEdit = state.findIndex(
        (invoice) => invoice.id === action.payload.id
      );
      if (toEdit) {
        state.splice(toEdit, 1, action.payload);
      }
    },
    remove: (state, action: PayloadAction<{ id: string }>) => {
      let toDeleteIndex = state.findIndex(
        (invoice) => invoice.id === action.payload.id
      );
      if (toDeleteIndex) state.splice(toDeleteIndex, 1);
    },
    markAsPaid: (state, action: PayloadAction<{ id: string }>) => {
      let toMark = state.find((invoice) => invoice.id === action.payload.id);
      if (toMark) toMark.status = "paid";
    },
  },
});

//export action creators
export const {
  add: addInvoiceActionCreator,
  edit: editInvoiceActionCreator,
  remove: removeInvoiceActionCreator,
  markAsPaid: markInvoiceActionCreator,
} = invoicesSlice.actions;

export default invoicesSlice;
