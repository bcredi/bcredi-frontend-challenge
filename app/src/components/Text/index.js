import React from "react";
import propTypes from "prop-types";

// Styles
import "./index.css";

// Component
const Text = ({ children }) => {
  return <p className="text">{ children }</p>;
};

Text.propTypes = {
  children: propTypes.string.isRequired
};

export default Text;
