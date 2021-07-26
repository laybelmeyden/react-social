import React from "react";
import ReactDOM from "react-dom";
import store from './components/redux/state';
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rerenderFunc = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App 
        state={state} 
        dispatch={store.dispatch.bind(store)} 
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
rerenderFunc(store.getState());
store.subscribe(rerenderFunc);
reportWebVitals();