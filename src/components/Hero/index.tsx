import React from "react";
import styled from "styled-components";

interface props {
  image: string;
  quote: string;
  author: string;
  company: string;
}

const Hero = ({ image, quote, author, company }: props) => {
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
      <HeroContent>
        <HeroQuote>{quote}</HeroQuote>
        <HeroAuthorInfo>{`${author},`}</HeroAuthorInfo>
        <HeroAuthorInfo>{company}</HeroAuthorInfo>
      </HeroContent>
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
const HeroQuote = styled.p`
  margin-bottom: 8px;
  font-size: 20px;
  line-height: 30px;
`;
const HeroAuthorInfo = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

export default Hero;
