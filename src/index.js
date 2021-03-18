import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./redux/store";
import { Provider } from "react-redux";

import "./styles/styles.scss";

ReactDOM.render(
  // Proveer el store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
