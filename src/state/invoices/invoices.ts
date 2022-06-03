import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { hideDeleteConfirmation } from "../delete_confirmation/deleteConfirmation";
// import data from "../../data.json";
import { InvoiceInterface } from "../../types";

const TOKEN = JSON.parse(localStorage.getItem("userInfo") || "{}").token;

//TODO:
const invoices: InvoiceInterface[] = [];
const initialState = {
  invoices,
  loading: false,
  error: "",
};

type EditInvoiceDataType = {
  id: string | undefined;
  invoiceData: InvoiceInterface;
};

export const fetchInvoices = createAsyncThunk(
  "fetchInvoices",
  async (args, { rejectWithValue }) => {
    let url_fetchInvoices = `${process.env.REACT_APP_BASE_URL}/invoices`;
    //implementing cache, then network strategy
    //simultaneously send a fetch request for invoices

    // const response = await fetch(url_fetchInvoices, {
    //   headers: {
    //     "x-auth-token": TOKEN,
    //   },
    // });
    // const data = await response.json();
    // if (response.ok) {
    //   console.log("invoice from NETWORK", data);
    //   return data;
    // } else {
    //   // return rejectWithValue(data);
    // }

    // //check cache for data
    // // if ("caches" in window) {
    // const cacheResponse = await caches.match(url_fetchInvoices);
    // let cacheData;
    // if (cacheResponse) {
    //   cacheData = await cacheResponse.json();
    //   console.log("invoice from CACHE ", cacheData);
    //   return cacheData;
    // }
    // }

    //2
    const getFromCache = caches
      .match(url_fetchInvoices)
      .then((response) => {
        if (response) {
          return response.json();
        }
      })
      .then((data) => {
        console.log("invoices from CACHE", data);
        return data;
      });

    const getFromFetch = fetch(url_fetchInvoices, {
      headers: {
        "x-auth-token": TOKEN,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return rejectWithValue(response.json());
        }
      })
      .then((data) => {
        console.log("invoices from FETCH", data);
        return data;
      });

    console.log(
      "THE ACCEPTED ON IS ",
      await Promise.race([getFromFetch, getFromCache])
    );
    console.log("getFromFetch => ", getFromFetch);
    console.log("getFromFetch => ", getFromCache);
    return await Promise.race([getFromCache, getFromFetch]);
  }
);

export const postInvoice = createAsyncThunk(
  "addInvoice",
  async (invoiceData: InvoiceInterface, { rejectWithValue }) => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/invoices`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "x-auth-token": TOKEN,
      },
      body: JSON.stringify(invoiceData),
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return rejectWithValue(data);
    }
  }
);

export const postDraft = createAsyncThunk(
  "postDraft",
  async (invoiceData: InvoiceInterface, {}) => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/invoices/draft`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": TOKEN,
        },
        body: JSON.stringify(invoiceData),
      }
    );
    return await response.json();
  }
);

export const editInvoice = createAsyncThunk(
  "editInvoice",
  async (editArgs: EditInvoiceDataType, {}) => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/invoices/edit/${editArgs.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": TOKEN,
        },
        body: JSON.stringify(editArgs.invoiceData),
      }
    );
    return await response.json();
  }
);

export const patchStatus = createAsyncThunk(
  "patchStatus",
  async (_id: string, {}) => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/invoices/${_id}/status`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": TOKEN,
        },
      }
    );
    return await response.json();
  }
);

export const deleteInvoice = createAsyncThunk(
  "deleteInvoice",
  async (_id: string, { dispatch }) => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/invoices/${_id}`,
      {
        method: "DELETE",
        headers: {
          "x-auth-token": TOKEN,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      dispatch(hideDeleteConfirmation());
      return await response.json();
    }
  }
);

export const deleteAllInvoices = createAsyncThunk(
  "deleteAllInvoices",
  async (userId: string, {}) => {
    fetch(`${process.env.REACT_APP_BASE_URL}/invoices/deleteAll/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": TOKEN,
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

//INVOICE SLICE
//INVOICE SLICE
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
      console.log(" INSIDE INVOICE REDUCER", action);
      state.invoices = action.payload;
    });
    //post invoice extra reducers
    builder.addCase(postInvoice.fulfilled, (state, action) => {
      state.invoices.push(action.payload);
    });
    builder.addCase(postDraft.fulfilled, (state, action) => {
      state.invoices.push(action.payload);
    });
    builder.addCase(editInvoice.fulfilled, (state, action) => {
      let toEdit = state.invoices.findIndex(
        (invoice) => (invoice.id = action.payload.id)
      );
      if (toEdit) {
        state.invoices.splice(toEdit, 1, action.payload);
      }
    });
    builder.addCase(patchStatus.fulfilled, (state, action) => {
      let toMark = state.invoices.find(
        (invoice) => invoice._id === action.payload
      );
      if (toMark) toMark.status = "paid";
    });
    builder.addCase(deleteInvoice.fulfilled, (state, action) => {
      let toDeleteIndex = state.invoices.findIndex(
        (invoice) => invoice.id === action.payload.id
      );
      if (toDeleteIndex) state.invoices.splice(toDeleteIndex, 1);
    });
    builder.addCase(deleteAllInvoices.fulfilled, (state, action) => {
      return initialState;
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
