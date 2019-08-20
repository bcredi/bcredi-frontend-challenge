import React from "react";
import propTypes from "prop-types";

// Utils
import classNames from "../../utils/classnames";

// Styles
import "./index.css";

// Component
const Text = ({ center, children }) => {
  const className = classNames(["text", center ? "text-center" : null]);

  return <p className={className}>{children}</p>;
};

Text.propTypes = {
  children: propTypes.string.isRequired
};

export default Text;
