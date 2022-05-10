import { createSlice } from "@reduxjs/toolkit";

const deleteConfirmationSlice = createSlice({
  name: "deleteConfirmation",
  initialState: false,
  reducers: {
    toggle: (state) => {
      return !state;
    },
  },
});

export const { toggle: toggleDeleteConfirmation } =
  deleteConfirmationSlice.actions;

export default deleteConfirmationSlice;
