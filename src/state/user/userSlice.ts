import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
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
interface MyKnownError {
  errorMessage: string;
  // ...
}

type SignupDataType = {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
  navigate: NavigateFunction;
};

type LoginDataType = {
  formData: {
    email: string;
    password: string;
  };
  navigate: NavigateFunction;
};

export const login = createAsyncThunk(
  "user/login",
  async ({ formData, navigate }: LoginDataType, { rejectWithValue }) => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    if (response.ok) {
      navigate("/main");
      const data = await response.json();
      return data;
    } else {
      return rejectWithValue((await response.json()) as MyKnownError);
    }
  }
);

export const signup = createAsyncThunk(
  "user/signup",
  async ({ formData, navigate }: SignupDataType, { rejectWithValue }) => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/users/sign_up`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      const data = await response.json();
      navigate("/");
      return data;
    } else {
      return rejectWithValue((await response.json()) as MyKnownError);
    }
  }
);

const initialState = {
  userInfo: userDetails,
  loading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //signup extra reducers
    builder.addCase(signup.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.loading = false;
      state.error = "Something went wrong";
    });
    builder.addCase(signup.fulfilled, (state, action) => {});

    //login extra reducers
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      state.loading = false;
      state = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      //@ts-ignore
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export default userSlice;
