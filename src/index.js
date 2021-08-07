import React from "react";
import ReactDOM from "react-dom";
import store from './components/redux/redux_store';
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"


// const rerenderFunc = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
        <App/>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
// };
// rerenderFunc(store.getState());
// store.subscribe(rerenderFunc);
// store.subscribe(() => {
//   const state = store.getState();
//   rerenderFunc(state);
// })
reportWebVitals();