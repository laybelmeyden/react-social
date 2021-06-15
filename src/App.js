import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Links />
      <ul>
        <li>one</li>
        <li>two</li>
        <li>12312</li>
        <li>3333</li>
      </ul>
    </div>
  );
};
const Links = () => {
  return(
    <div className="links">
    <a href="1">1</a>
    <a href="2">2</a>
    <a href="3">3</a>
    <a href="4">4</a>
  </div>
  );
};

export default App;
