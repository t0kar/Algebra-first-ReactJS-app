import logo from "./logo.svg";
import "./App.css";
import { getCurrentDate, getId } from "./helpers";
import constant, { getRandomName, getRandomColor } from "./random";

require("dayjs/locale/hr");

// MMMM DD YYYY, HH:mm:ss

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Učimo ReactJS</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Moja prva aplikacija</p>
        <p>Danas je {getCurrentDate()}</p>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia o ReactJS-u
        </a>
        <p>
          Ja sam {getRandomName()} i moja najdraža boja je {getRandomColor()}.
        </p>
        <p>
          Tvoj jedinstveni identifikator je <strong>{getId()}</strong>.
        </p>
        <p>Izabrana konstanta je {constant}.</p>
      </header>
    </div>
  );
}
export default App;
