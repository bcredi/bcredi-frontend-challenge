import React from "react";

// Backgrounds
import BACKGROUND_ONE from "../../assets/images/signup-background-one.jpg";
import BACKGROUND_TWO from "../../assets/images/signup-background-two.jpg";
import BACKGROUND_THREE from "../../assets/images/signup-background-three.jpg";

// Utils
import random from "../../utils/randomBetween";

// Styles
import "./index.css";

// Component
const Hero = ({ children }) => {
  const backgrounds = [BACKGROUND_ONE, BACKGROUND_TWO, BACKGROUND_THREE];
  const index = random(3);
  const background = backgrounds[index];

  return (
    <div className="hero" style={{ backgroundImage: `url(${background})` }}>
      {children}
    </div>
  );
};

export default Hero;
