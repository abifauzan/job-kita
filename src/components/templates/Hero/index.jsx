import React from "react";
import HeroHome from "./Home";
import styled from "styled-components";
import HeroHomeAlt from "./HomeAlt";

const HeroWrapper = styled.main`
  position: relative;
`;

const Hero = () => {
  return (
    <HeroWrapper>
      {/* <HeroHome /> */}
      <HeroHomeAlt />
    </HeroWrapper>
  );
};

export default Hero;
