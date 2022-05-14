import { Routes, Route } from "react-router-dom";
import { useAppSelector } from "./utils/redux";
import MainPage from "./pages/main_page/MainPage";
import InvoiceDetails from "./pages/invoice_details/InvoiceDetails";
import Settings from "./pages/settings/Settings";
import Appbar from "./components/appbar/Appbar";
import DirnAppStyles from "./DirnAppStyles";

function DirnApp() {
  const classes = DirnAppStyles();
  const darkTheme = useAppSelector((state) => state.darkTheme);
  return (
    <div
      className={classes.InvoiceApp}
      style={{ backgroundColor: darkTheme ? "#141625" : "#F8F8FB " }}
    >
      <nav className={classes.Appbar}>
        <Appbar />
      </nav>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/invoice/:id" element={<InvoiceDetails />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default DirnApp;
