import "./App.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
// import Profile from "./components/Profile";
// import Message from "./components/messages/Message";
// import Friend from "./components/friends/AllFriends";
import { Route } from "react-router-dom";
import ProfileContainer from "./components/profile/ProfileContainer";
import MessageContainer from "./components/messages/MessageContainer";
import AllFriendsContainer from "./components/friends/AllFriendsContainer";

const App = () => {
  return (
    <div>
      <Header />
      <div className="grid__container">
        <Navbar />
        <Route exact path="/" render={() => <ProfileContainer />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route
          path="/messages"
          render={() => (
            // <Message
            //   state={props.state.messagesPage}
            //   dispatch={props.dispatch}
            // />
            <MessageContainer
            // store={props.state.messagesPage}
            // dispatch={props.dispatch}
            />
          )}
        />
        <Route
          path="/friends"
          render={() => (
            <AllFriendsContainer
            // state={props.state.friendsPage}
            // dispatch={props.dispatch}
            />
          )}
        />
      </div>
    </div>
  );
};

export default App;
