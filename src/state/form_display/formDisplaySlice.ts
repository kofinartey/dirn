import { createSlice } from "@reduxjs/toolkit";

const formDisplaySlice = createSlice({
  name: "formDisplay",
  initialState: false,
  reducers: {
    toggleForm: (state) => {
      return !state;
    },
  },
});

export const { toggleForm } = formDisplaySlice.actions;

export default formDisplaySlice;
