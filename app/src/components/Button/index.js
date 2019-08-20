import React from "react";
import propTypes from "prop-types";

// Components
import Icon from "../Icon";

// Styles
import "./index.css";

// Component
const Button = ({ children, disabled, icon, onClick, type }) => {
  return (
    <button
      className="button"
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {icon ? <Icon className="button__icon" icon={icon} /> : null}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: propTypes.string.isRequired,
  disabled: propTypes.bool,
  icon: propTypes.string,
  onClick: propTypes.func,
  type: propTypes.string
};

Button.defaultProps = {
  disabled: false,
  onClick: () => ({
    // Noop
  }),
  type: "submit"
};

export default Button;
