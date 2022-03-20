import React from "react";
import styled from "styled-components";
import Navbar from "../navbar";
import Hero from "../Hero";

const MainLayout = styled.main`
  position: relative;
`;

const Layout = ({ children }) => {
  return (
    <MainLayout className="mt-[76px] md:mt-0 pb-10">
      <Navbar />
      <Hero />

      <div className="container mt-10 px-4 md:px-0 mx-auto">{children}</div>
    </MainLayout>
  );
};

export default Layout;
