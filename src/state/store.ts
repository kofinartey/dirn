import { configureStore } from "@reduxjs/toolkit";
import invoicesSlice from "./invoices/invoices";
import themeSlice from "./theme/theme";
import userSlice from "./user/userSlice";

const allReducers = {
  invoices: invoicesSlice.reducer,
  darkTheme: themeSlice.reducer,
  user: userSlice.reducer,
};

const store = configureStore({
  reducer: allReducers,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
