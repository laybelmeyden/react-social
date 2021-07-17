import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { profilePageAddPost,messagesPageAddPost } from "./components/redux/state";
import state from './components/redux/state';

export const rerenderFunc = (props) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App 
        state={state} 
        profilePageAddPost={profilePageAddPost} 
        messagesPageAddPost={messagesPageAddPost}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
rerenderFunc();
