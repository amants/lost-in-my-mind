import React, { useState } from "react";
import styled from "styled-components";

import logo from "../assets/images/logo.svg";
import MenuPopUp from "../components/MenuPopUp";
import { node } from "prop-types";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <LayoutContainer>
      {showMenu && <MenuPopUp dispatch={() => setShowMenu(false)} />}
      <a href="https://mementowoordfestival.be">
        <Logo src={logo} alt="Memento logo"></Logo>
      </a>
      <NavBar />
      <Menu onClick={() => setShowMenu(true)}>Menu</Menu>
      <Container>{children}</Container>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 10rem;

  @media screen and (min-width: 1100px) {
    width: calc(100vw - 160px - 100px);
    margin: auto;
    position: relative;
    left: 60px;
    max-width: 1200px;
  }
`;

const Container = styled.div`
  padding-top: 12rem;

  @media screen and (min-width: 900px) {
    padding-top: 10rem;
  }
`;

const Menu = styled.a`
  position: absolute;
  right: 2rem;
  top: 3rem;
  background-color: #2e2457;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff2ea;
  cursor: pointer;
  padding: 8px 15px 10px;
  border-radius: 4px;
  font-size: 1.475rem;
  z-index: 9;
  letter-spacing: 0.5px;
  font-family: gt-pressura, sans-serif;

  @media screen and (min-width: 1100px) {
    display: none;
  }
`;

const Logo = styled.img`
  position: absolute;
  left: 1.5rem;
  z-index: 9;
  top: 1rem;
  width: 6rem;

  @media screen and (min-width: 1100px) {
    height: 200px;
    margin-left: -160px;
    left: unset;
    position: fixed;
    top: 30px;
    width: 130px;
    margin-right: 30px;
  }
`;

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
