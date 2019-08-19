import React from "react";
import ReactDOM from "react-dom";

// Components
import Button from './components/Button'
import Input from './components/Input'

// Styles
import "./index.css";

// Component
const App = () => (
  <div>
    <Button icon="locked">Cadastrar</Button>
    <Input label="Nome" placeholder="Escreva seu nome completo" name="name" error="O campo email é obrigatório" />
  </div>
)

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);