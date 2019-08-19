import React from "react";
import ReactDOM from "react-dom";

// Components
import Button from './components/Button'
import Input from './components/Input'
import Title from './components/Title'
import Text from './components/Text'

// Styles
import "./index.css";

// Component
const App = () => (
  <div>
    <Button icon="locked">Cadastrar</Button>
    <Input label="Nome" placeholder="Escreva seu nome completo" name="name" error="O campo email é obrigatório" />
    <Title>Criar meu cadastro</Title>
    <Text>Para acompanhar sua contratação de crédito você utilizará seu e-mail e CPF.</Text>
  </div>
)

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);