import React, { useMemo } from "react";
import styled from "styled-components";
import Navbar from "../navbar";
import Hero from "../Hero";
import { useLocation } from "react-router-dom";

const MainLayout = styled.main`
  position: relative;
`;

const Layout = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;

  const childrenClass = useMemo(() => {
    return pathname === "/" ? "mt-24" : "mt-24";
  }, [pathname]);
  return (
    <MainLayout className="mt-[76px] md:mt-0 pb-10">
      <Navbar />
      <Hero />

      <div className={`${childrenClass} container px-4 md:px-0 mx-auto`}>{children}</div>
    </MainLayout>
  );
};

export default Layout;
