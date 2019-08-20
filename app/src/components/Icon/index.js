import React from "react";
import propTypes from "prop-types";

// Icons
import active from "../../assets/icons/active.svg";
import locked from "../../assets/icons/signup.svg";
import logo from "../../assets/icons/logo.svg";
import view from "../../assets/icons/view-password.svg";

const icons = {
  active,
  locked,
  logo,
  view
};

// Component
const Icon = ({ className = "", icon, iconClick }) => (
  <img className={className} src={icons[icon]} onClick={iconClick} />
);

Icon.propTypes = {
  className: propTypes.string,
  icon: propTypes.string.isRequired,
  iconClick: propTypes.func
};

Icon.defaultProps = {
  iconClick: () => {}
};

export default Icon;
