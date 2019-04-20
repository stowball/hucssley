import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

function App() {
  return (
    <style>
      {`* {
      display: block;
    }
    
    head *:not(style),
    body style {
      display: none;
    }
    
    style {
      font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
      font-size: 0.875em;
      padding: 1em;
      white-space: pre;
    }`}
    </style>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
