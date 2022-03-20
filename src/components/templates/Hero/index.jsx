import React from "react";
import HeroHome from "./Home";
import styled from "styled-components";
import HeroHomeAlt from "./HomeAlt";
import { useLocation } from "react-router-dom";

const HeroWrapper = styled.main`
  position: relative;
`;

const Hero = () => {
  const location = useLocation();
  const { pathname } = location;

  return <HeroWrapper>{pathname === "/" ? <HeroHome /> : <HeroHomeAlt />}</HeroWrapper>;
};

export default Hero;
