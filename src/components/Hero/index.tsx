import React, { ReactNode } from "react";
import styled from "styled-components";

interface props {
  image: string;
  children: ReactNode;
}

const Hero = ({ image, children }: props) => {
  const ImageWrapper = styled.div`
    height: 100vh;
    width: 43.203125%;
    background-image: linear-gradient(
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0) 16%,
        rgba(0, 0, 0, 0) 42%,
        rgba(0, 0, 0, 0.5) 69%,
        rgba(0, 0, 0, 0.8) 96%
      ),
      url(${image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;

    @media (max-width: 600px) {
      display: none;
    }
  `;

  return (
    <ImageWrapper>
      <HeroContent>{children}</HeroContent>
    </ImageWrapper>
  );
};

const HeroContent = styled.div`
  color: var(--base-color-white);
  text-align: right;
  width: 66.85%;
  position: absolute;
  right: 7.25%;
  bottom: 4.72%;
`;

export default Hero;
