import React from "react";

// Utils
import classNames from "../../utils/classnames";

// Styles
import "./index.css";

// Component
const Box = ({ children, error }) => {
  const className = classNames(["box", error ? "box--error" : null]);

  return <div className={className}>{children}</div>;
};

export default Box;
