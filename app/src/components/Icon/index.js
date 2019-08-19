import React from "react";

// Icons
import locked from "../../assets/icons/signup.svg";
import view from "../../assets/icons/view-password.svg";

const icons = {
  locked,
  view
};

// Component
const Icon = ({ className="", icon }) => <img className={className} src={icons[icon]} />;

export default Icon;
