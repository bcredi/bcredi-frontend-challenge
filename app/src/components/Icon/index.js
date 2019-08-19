import React from "react";

// Icons
import active from "../../assets/icons/active.svg";
import locked from "../../assets/icons/signup.svg";
import view from "../../assets/icons/view-password.svg";

const icons = {
  active,
  locked,
  view
};

// Component
const Icon = ({ className="", icon }) => <img className={className} src={icons[icon]} />;

export default Icon;
