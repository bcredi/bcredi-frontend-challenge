import React from "react";
import ReactDOM from "react-dom";

// Components
import Layout from './components/Layout'

// Sections
import Hero from "./components/Hero"
import SignUp from "./components/SignUp"

// Styles
import "./index.css";

// Component
const App = () => (
  <Layout>
    <Hero />
    <SignUp />
  </Layout>
)

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);