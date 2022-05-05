import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemInterface } from "../../types";

const initialState: ItemInterface[] = [];

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ItemInterface>) => {
      state.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      const toRemove = state.findIndex((item) => item.name === action.payload);
      // if (toRemove) state.splice(toRemove, 1);
      state.splice(toRemove, 1);
    },
    reset: (state) => {
      state = initialState;
    },
  },
});

export const {
  add: addItemActionCreator,
  remove: removeItermActionCreator,
  reset: resetItemActionCreator,
} = itemsSlice.actions;

export default itemsSlice;
