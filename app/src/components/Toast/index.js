import React from "react";

// Utils
import classNames from "../../utils/classnames";

// Styles
import "./index.css";

// Component
const Toast = ({ children, error }) => {
  const className = classNames(["toast", error ? "toast--error" : null]);

  return <div className={className}>{children}</div>;
};

export default Toast;
