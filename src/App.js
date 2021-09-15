import logo from "./logo.svg";
import "./App.css";
import * as dayjs from "dayjs";
import { nanoid } from "nanoid";

require("dayjs/locale/hr");

// MMMM DD YYYY, HH:mm:ss

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Učimo ReactJS</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Moja prva aplikacija</p>
        <p>Danas je {dayjs().locale("hr").format("MMMM DD YYYY, HH:mm:ss")}</p>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia o ReactJS-u
        </a>
        <p>
          Tvoj jedinstveni identifikator je <strong>{nanoid()}</strong>.
        </p>
      </header>
    </div>
  );
}
export default App;
