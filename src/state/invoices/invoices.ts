import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// import data from "../../data.json";
import { InvoiceInterface } from "../../types";

//TODO:
const invoices: InvoiceInterface[] = [];
const initialState = {
  invoices,
  loading: false,
  error: "",
};
// JSON.parse(localStorage.getItem("invoices") || "{}") || [];

export const fetchInvoices = createAsyncThunk(
  "fetchInvoices",
  async (args, {}) => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo") || "{}").token!;

      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/invoices`,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      const invoices = await response.json();
      return invoices;
    } catch (error) {
      console.log("Couldn't fetch invoices");
      console.log(error);
    }
  }
);

//INVOICE SLICE
const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<InvoiceInterface>) => {
      state.invoices.unshift(action.payload);
    },
    edit: (state, action: PayloadAction<InvoiceInterface>) => {
      console.log("edit called");
      let toEdit = state.invoices.findIndex(
        (invoice) => invoice.id === action.payload.id
      );
      if (toEdit) {
        state.invoices.splice(toEdit, 1, action.payload);
      }
    },
    remove: (state, action: PayloadAction<{ id: string }>) => {
      let toDeleteIndex = state.invoices.findIndex(
        (invoice) => invoice.id === action.payload.id
      );
      if (toDeleteIndex) state.invoices.splice(toDeleteIndex, 1);
    },
    markAsPaid: (state, action: PayloadAction<{ id: string }>) => {
      let toMark = state.invoices.find(
        (invoice) => invoice.id === action.payload.id
      );
      if (toMark) toMark.status = "paid";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchInvoices.pending, () => {});
    builder.addCase(fetchInvoices.rejected, () => {});
    builder.addCase(fetchInvoices.fulfilled, (state, action) => {
      localStorage.setItem("invoices", action.payload);
      return action.payload;
    });
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
