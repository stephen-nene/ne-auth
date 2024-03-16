import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/styles/styles.css";

import { Provider } from "react-redux";
import store from "./assets/store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
 <BrowserRouter>
 <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
 </BrowserRouter>,
);
