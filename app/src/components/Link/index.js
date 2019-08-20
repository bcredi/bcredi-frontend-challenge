import React from "react";
import propTypes from "prop-types";

// Utils
import classNames from "../../utils/classnames";

// Styles
import "./index.css";

// Component
const Link = ({ children, to, small }) => {
  const className = classNames(["link", small ? "text-small" : null]);

  return (
    <a className={className} href={to}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: propTypes.string.isRequired
};

export default Link;
