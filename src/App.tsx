import React from "react";
import { Provider } from "react-redux";
import store from "./state/store";
import DirnApp from "./DirnApp";

function App() {
  return (
    <Provider store={store}>
      <DirnApp />
    </Provider>
  );
}

export default App;
