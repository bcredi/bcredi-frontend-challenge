import React from "react";
import propTypes from "prop-types";

// Styles
import "./index.css";

// Component
const Link = ({ children, to }) => {
  return (
    <a className="link" href={to}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: propTypes.string.isRequired
};

export default Link;
