import logo from "./logo.svg";
import "./App.css";
import constant from "./random";
import CurrentDate from "./components/CurrentDate";
import UniqueId from "./components/UniqueId";
import UserInfo from "./components/UserInfo";

require("dayjs/locale/hr");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Učimo ReactJS</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Moja prva aplikacija</p>
        <CurrentDate />
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia o ReactJS-u
        </a>
        <UserInfo />
        <UniqueId />
        <p>Izabrana konstanta je {constant}.</p>
      </header>
    </div>
  );
}
export default App;
