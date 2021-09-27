import React from "react";
import ReactDOM from "react-dom";
import store from "./components/redux/redux_store";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
