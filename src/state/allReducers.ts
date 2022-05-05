import invoicesSlice from "./invoices/invoices";
import themeSlice from "./theme/theme";
import userSlice from "./user/userSlice";
import formDisplaySlice from "./form_display/formDisplaySlice";
import itemsSlice from "./items/items";

const allReducers = {
  invoices: invoicesSlice.reducer,
  darkTheme: themeSlice.reducer,
  user: userSlice.reducer,
  items: itemsSlice.reducer,
  formDisplay: formDisplaySlice.reducer,
};

export default allReducers;
