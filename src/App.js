import logo from "./logo.svg";
import "./App.css";
import constant from "./random";
import CurrentDate from "./components/CurrentDate";
import UniqueId from "./components/UniqueId";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ReactJS</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>My first app</p>
        <CurrentDate />
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wiki about ReactJS
        </a>
        <UserInfo />
        <UniqueId />
        <p>Used constant is {constant}.</p>
      </header>
    </div>
  );
}
export default App;
