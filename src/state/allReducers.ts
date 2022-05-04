import invoicesSlice from "./invoices/invoices";
import themeSlice from "./theme/theme";
import userSlice from "./user/userSlice";
import formDisplaySlice from "./form_display/formDisplaySlice";

const allReducers = {
  invoices: invoicesSlice.reducer,
  darkTheme: themeSlice.reducer,
  user: userSlice.reducer,
  formDisplay: formDisplaySlice.reducer,
};

export default allReducers;
