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
const Input = ({
  error,
  errorMessage,
  icon,
  iconClick,
  label,
  mask,
  name,
  onChange,
  placeholder,
  required = false,
  type
}) => {
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
    let input = value;

    if (mask) {
      input = masks[mask](value);
    }

    setValue(input);
    onChange(event.target.name, input);
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
          name={name}
          placeholder={placeholder}
          onChange={handleInput}
          value={value}
          type={type}
          required={required}
        />
        {icon && (
          <Icon
            className="input__control__icon"
            icon={icon}
            iconClick={iconClick}
          />
        )}
      </div>
      {error && <small className={inputError}>{errorMessage}</small>}
    </div>
  );
};

Input.propTypes = {
  error: propTypes.bool,
  icon: propTypes.string,
  iconClick: propTypes.func,
  label: propTypes.string.isRequired,
  mask: propTypes.oneOf(["document", "date"]),
  name: propTypes.string.isRequired,
  placeholder: propTypes.string
};

Input.defaultProps = {
  iconClick: () => {}
};

export default Input;
