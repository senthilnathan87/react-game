import React from "react";
import ReactDOM from "react-dom";
import Game from "./game";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
