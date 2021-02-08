import React, { useState } from "react";
import styled from "styled-components";

import MenuPopUp from "../components/MenuPopUp";

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {showMenu && <MenuPopUp dispatch={() => setShowMenu(false)} />}
      <Logo src="./assets/images/logo.png"></Logo>
      <Menu onClick={() => setShowMenu(true)}>Menu</Menu>
      <Container>{children}</Container>
    </>
  );
};

const Container = styled.div`
  padding: 2rem;
  padding-top: 10rem;
`;

const Menu = styled.a`
  position: absolute;
  right: 1.5rem;
  top: 3rem;
  background-color: #2e2457;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff2ea;
  padding: 8px 15px 10px;
  border-radius: 4px;
  font-size: 1.125rem;
  z-index: 2;
  letter-spacing: 0.5px;
  font-family: gt-pressura, sans-serif;
`;

const Logo = styled.img`
  position: absolute;
  left: 1.5rem;
  z-index: 7;
  top: 1rem;
`;

export default Layout;
