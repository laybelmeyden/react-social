import "./App.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Message from "./components/messages/Message";
import {Route } from "react-router-dom";

const App = (props) => {
  return (
    <div>
        <Header />
        <div className="grid__container">
          <Navbar />
          <Route exact path="/" render={
            ()=> <Profile 
            state={props.state.profilePage} 
            dispatch={props.dispatch}
            />}  />
          <Route  path="/messages" 
          render={
            ()=> <Message 
            state={props.state.messagesPage} 
            dispatch={props.dispatch}
            />} 
            />
        </div>
      </div>
  );
};

export default App;
