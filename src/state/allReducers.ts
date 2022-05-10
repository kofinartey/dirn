import invoicesSlice from "./invoices/invoices";
import themeSlice from "./theme/theme";
import userSlice from "./user/userSlice";
import formDisplaySlice from "./form_display/formDisplaySlice";
import itemsSlice from "./items/items";
import deleteConfirmationSlice from "./delete_confirmation/deleteConfirmation";

const allReducers = {
  invoices: invoicesSlice.reducer,
  darkTheme: themeSlice.reducer,
  user: userSlice.reducer,
  items: itemsSlice.reducer,
  formDisplay: formDisplaySlice.reducer,
  deleteConfirmation: deleteConfirmationSlice.reducer,
};

export default allReducers;
