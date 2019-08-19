import React from "react";
import propTypes from "prop-types";

// Components
import Icon from "../Icon";

// Styles
import "./index.css";

// Component
const Button = ({ children, disabled, icon, onClick }) => {
  return (
    <button className="button" disabled={disabled} onClick={onClick}>
      {icon ? <Icon className="button__icon" icon={icon} /> : null}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: propTypes.string.isRequired,
  disabled: propTypes.bool,
  icon: propTypes.string,
  onClick: propTypes.func
}

Button.defaultProps = {
  disabled: false,
  onClick: () => ({
    // Noop
  })
}

export default Button;
