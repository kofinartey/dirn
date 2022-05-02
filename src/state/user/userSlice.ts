import { createSlice } from "@reduxjs/toolkit";
import { UserInterface } from "../../types";

const userDetails: UserInterface = {
  firstName: "Kofi",
  lastName: "Nartey",
  email: "kofinartey@gmail.com",
  role: "user",
  _id: "1234567890",
  settings: {
    darkTheme: false,
    currency: "$",
    _id: "09876543321",
  },
};

const initialState = {
  userInfo: userDetails,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice;
