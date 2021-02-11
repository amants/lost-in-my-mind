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
      <Logo src={logo} alt="Memento logo"></Logo>
      {showMenu && <MenuPopUp dispatch={() => setShowMenu(false)} />}
      <NavBar />
      <Menu onClick={() => setShowMenu(true)}>Menu</Menu>
      {children}
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  @media screen and (min-width: 1100px) {
    padding: 0;
    width: calc(100vw - 160px - 100px);
    margin: auto;
    position: relative;
    left: 60px;
    max-width: 1200px;
  }
`;

const Menu = styled.a`
  position: fixed;
  right: 2rem;
  top: 3rem;
  background-color: #2e2457;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff2ea;
  padding: 8px 15px 10px;
  border-radius: 4px;
  font-size: 1.475rem;
  cursor: pointer;
  z-index: 1;
  letter-spacing: 0.5px;
  font-family: gt-pressura, sans-serif;

  @media screen and (min-width: 1100px) {
    display: none;
  }
`;

const Logo = styled.img`
  position: absolute;
  left: 1.5rem;
  z-index: 7;
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
