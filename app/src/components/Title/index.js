import React from "react";
import propTypes from "prop-types";

// Styles
import "./index.css";

// Component
const Title = ({ children }) => {
  return <h1 className="title">{ children }</h1>;
};

Title.propTypes = {
  children: propTypes.string.isRequired
};

export default Title;
