import "./App.scss";
import { Route } from "react-router-dom";
import ProfileContainer from "./components/profile/ProfileContainer";
import MessageContainer from "./components/messages/MessageContainer";
import AllFriendsContainer from "./components/friends/AllFriendsContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import NavbarContainer from "./components/navbar/NavbarContainer";

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <div className="grid__container">
        <NavbarContainer />
        <Route exact path="/" render={() => <ProfileContainer />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/messages" render={() => <MessageContainer />} />
        <Route path="/friends" render={() => <AllFriendsContainer />} />
      </div>
    </div>
  );
};

export default App;
