import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/main_page/MainPage";

function DirnApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default DirnApp;
