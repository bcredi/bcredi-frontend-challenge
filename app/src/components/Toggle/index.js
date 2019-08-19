import React, { useState } from "react";

// Utils
import classNames from "../../utils/classnames";

// Components
import Icon from "../Icon";

// Styles
import "./index.css";

// Component
const Toggle = ({ active = false }) => {
  const [isActive, setActive] = useState(active);
  const className = classNames(["toggle", isActive ? "toggle--active" : null]);
  const toggleActive = () => setActive(!isActive);

  return (
    <div className={className} onClick={toggleActive}>
      {isActive && <Icon icon="active" />}
    </div>
  );
};

export default Toggle;
