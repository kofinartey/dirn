import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./state/store";
import DirnApp from "./DirnApp";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <DirnApp />
      </Provider>
    </Router>
  );
}

export default App;
