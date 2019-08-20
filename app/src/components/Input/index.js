import React, { useState } from "react";
import propTypes from "prop-types";

// Utils
import classNames from "../../utils/classnames";
import masks from "../../utils/masks";

// Components
import Icon from "../Icon";

// Styles
import "./index.css";

// Component
const Input = ({ error, label, name, placeholder, icon, mask }) => {
  const inputControl = classNames([
    "input__control",
    error ? "input__control--error" : null
  ]);
  const inputError = classNames([
    "input__message",
    error ? "input__message--error" : null
  ]);

  const [value, setValue] = useState("");

  function handleInput(event) {
    const { value } = event.target;
    let masked = "";

    if (mask) {
      masked = masks[mask](value);
    }

    setValue(masked);
  }

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
          onChange={handleInput}
          value={value}
        />
        {icon && <Icon className="input__control__icon" icon={icon} />}
      </div>
      <small className={inputError}>{error}</small>
    </div>
  );
};

Input.propTypes = {
  error: propTypes.string,
  label: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  mask: propTypes.oneOf(["document", "date"]),
  placeholder: propTypes.string
};

export default Input;
