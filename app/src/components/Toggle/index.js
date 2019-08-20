import React, { useState } from "react";
import propTypes from "prop-types";

// Utils
import classNames from "../../utils/classnames";

// Components
import Icon from "../Icon";

// Styles
import "./index.css";

// Component
const Toggle = ({ active = false, name, onChange }) => {
  const [isActive, setActive] = useState(active);
  const className = classNames(["toggle", isActive ? "toggle--active" : null]);
  const toggleActive = event => {
    const input = !isActive;

    setActive(input);
    onChange(event.target.name, input);
  };

  return (
    <div className={className}>
      <input
        type="checkbox"
        checked={isActive}
        name={name}
        onChange={toggleActive}
      />
      {isActive && <Icon icon="active" />}
    </div>
  );
};

Toggle.propTypes = {
  name: propTypes.string.isRequired
};

export default Toggle;
