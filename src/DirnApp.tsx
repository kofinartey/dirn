import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/main_page/MainPage";
import InvoiceDetails from "./pages/invoice_details/InvoiceDetails";

function DirnApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/invoice/:id" element={<InvoiceDetails />} />
      </Routes>
    </Router>
  );
}

export default DirnApp;
