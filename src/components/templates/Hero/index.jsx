import React from "react";
import HeroHome from "./Home";
import styled from "styled-components";

const HeroWrapper = styled.main`
  position: relative;
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroHome />
    </HeroWrapper>
  );
};

export default Hero;
