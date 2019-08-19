import React from "react";
import ReactDOM from "react-dom";

// Components
import Button from './components/Button'

// Styles
import "./index.css";

// Component
const App = () => (
  <div>
    <Button icon="locked">Cadastrar</Button>
  </div>
)

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);