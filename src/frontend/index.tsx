import React from "react";
import ReactDOM from "react-dom";
import "./styles/tailwind.css";

if (process.env.NODE_ENV === "development") {
  if (!(window as any).ic) {
    const { HttpAgent, IDL } = require("@dfinity/agent");
    const createAgent = require("./createAgent").default;
    (window as any).ic = { agent: createAgent(), HttpAgent, IDL };
  }

  if (!document.getElementById("app")) {
    document.write('<div id="app"></div>');
    const container = document.createElement("div");
    container.id = "app";
    document.body.appendChild(container);
  }
}

const App = require("./pages/App").default;

document.title = "DFINITY React App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
