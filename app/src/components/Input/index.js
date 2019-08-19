import React from "react";
import propTypes from "prop-types";

// Utils
import classNames from "../../utils/classnames";

// Components
import Icon from "../Icon";

// Styles
import "./index.css";

// Component
const Input = ({ error, label, name, placeholder }) => {
  const inputControl = classNames([
    "input__control",
    error ? "input__control--error" : null
  ]);
  const inputError = classNames([
    "input__message",
    error ? "input__message--error" : null
  ]);

  return (
    <div className="input">
      <label className="input__label" htmlFor={name}>
        {label}
      </label>
      <div className={inputControl}>
        <input
          className="input__control__content"
          id={name}
          placeholder={placeholder}
        />
        <Icon className="input__control__icon" icon="view" />
      </div>
      <small className={inputError}>{error}</small>
    </div>
  );
};

Input.propTypes = {
  error: propTypes.string,
  label: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  placeholder: propTypes.string
};

export default Input;
