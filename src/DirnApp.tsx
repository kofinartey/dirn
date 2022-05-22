import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "./utils/redux";
//my imports
import { fetchInvoices } from "./state/invoices/invoices";
import Auth from "./pages/auth/Auth";
import MainPage from "./pages/main_page/MainPage";
import InvoiceDetails from "./pages/invoice_details/InvoiceDetails";
import Settings from "./pages/settings/Settings";
import Appbar from "./components/appbar/Appbar";
import DirnAppStyles from "./DirnAppStyles";

function DirnApp() {
  const classes = DirnAppStyles();
  const darkTheme = useAppSelector((state) => state.darkTheme);
  const user = useAppSelector((state) => state.user.userInfo);
  const dispatch = useAppDispatch();
  const location = useLocation();

  //load invoices when login is successful
  useEffect(() => {
    if (user && location.pathname !== "/") {
      dispatch(fetchInvoices());
    }
  }, [dispatch, location.pathname, user]);

  return (
    <div
      className={classes.InvoiceApp}
      style={{ backgroundColor: darkTheme ? "#141625" : "#F8F8FB " }}
    >
      {/* Remove appbar from login/signup page */}
      {location.pathname !== "/" && (
        <nav className={classes.Appbar}>
          <Appbar />
        </nav>
      )}
      <Routes>
        <Route path="/" element={<Auth />} />
        {user && <Route path="/main" element={<MainPage />} />}
        <Route path="/invoice/:_id/:id" element={<InvoiceDetails />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default DirnApp;
