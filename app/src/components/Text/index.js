import React from "react";
import propTypes from "prop-types";

// Utils
import classNames from "../../utils/classnames";

// Styles
import "./index.css";

// Component
const Text = ({ center, children, error, marginless, small }) => {
  const className = classNames([
    "text",
    center ? "text-center" : null,
    error ? "text-error" : null,
    small ? "text-small" : null,
    marginless ? "no-margin" : null
  ]);

  return <p className={className}>{children}</p>;
};

Text.propTypes = {
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.element,
    propTypes.node
  ]).isRequired
};

export default Text;
