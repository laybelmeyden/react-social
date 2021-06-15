import "./App.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div>
      <Header />
        <div className="grid__container">
          <Navbar />
          <Profile />
        </div>
    </div>
  );
};

export default App;
