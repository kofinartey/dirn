import { configureStore } from "@reduxjs/toolkit";
import invoicesSlice from "./invoices/invoices";

const allReducers = {
  invoices: invoicesSlice.reducer,
};

const store = configureStore({
  reducer: allReducers,
});

export default store;
