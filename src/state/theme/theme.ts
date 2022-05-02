import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: false,
  reducers: {
    switch: (state) => {
      return !state;
    },
  },
});

export const { switch: switchTheme } = themeSlice.actions;

export default themeSlice;
