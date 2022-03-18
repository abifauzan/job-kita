import React from "react";
import styled from "styled-components";
import Navbar from "../navbar";
import Hero from "../Hero";

const MainLayout = styled.main`
  position: relative;
`;

const Layout = ({ children }) => {
  return (
    <MainLayout className="mt-[76px] md:mt-0">
      <Navbar />
      <Hero />

      {children}
    </MainLayout>
  );
};

export default Layout;
