import React, { useState } from "react";
import styled from "styled-components";

import logo from "../assets/images/logo.svg";
import iconTickets from "../assets/images/icon-tickets.svg";
import logoKortrijk from "../assets/images/logo-kortrijk.svg";
import MenuPopUp from "../components/MenuPopUp";

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <LayoutContainer>
      {showMenu && <MenuPopUp dispatch={() => setShowMenu(false)} />}
      <Logo src={logo} alt="Memento logo"></Logo>
      <NavBar>
        <NavLinks>
          <NavLink>
            <a href="/">Programma</a>
          </NavLink>
          <NavLink>
            <a href="/">Woordroute</a>
          </NavLink>
          <NavLink active>
            <a href="/">Ambassadeurs</a>
          </NavLink>
          <NavLink>
            <a href="/">Partners</a>
          </NavLink>
        </NavLinks>
        <Actions>
          <TicketsButton>
            <img src={iconTickets} alt="Tickets icon" />
            Tickets
          </TicketsButton>
          <KortrijkButton>
            <img src={logoKortrijk} alt="logo Kortrijk" />
          </KortrijkButton>
        </Actions>
      </NavBar>
      <Menu onClick={() => setShowMenu(true)}>Menu</Menu>
      <Container>{children}</Container>
    </LayoutContainer>
  );
};

const KortrijkButton = styled.a`
  margin-left: 2rem;
  margin-right: -2rem;

  & > img {
    width: 30px;
    margin-right: 1rem;
  }
`;

const Actions = styled.div`
  align-items: stretch;
  display: flex;
  flex: 0;
  align-items: center;
`;

const TicketsButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4a655;
  border-radius: 4px;
  font-weight: 700;
  font-size: 1.375rem;
  letter-spacing: 0.5px;
  padding: 8px 15px 10px;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 2rem;
  & > img {
    margin-right: 1rem;
  }
`;

const NavBar = styled.nav`
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  height: auto;
  font-family: gt-pressura, sans-serif;
  justify-content: space-between;
  margin-top: 30px;
  padding: 10px 30px;
  flex-wrap: nowrap;
  display: none;
  background-color: #342a63;
  color: #faf5ed;

  @media screen and (min-width: 1100px) {
    display: flex;
  }
`;

const NavLinks = styled.ul`
  align-items: center;
  display: flex;
  flex: 0;
  flex-direction: row;
  align-items: center;
  margin-block-start: 0;
  margin-block-end: 0;
  list-style: none;
  padding: 0;
`;

const NavLink = styled.li`
  margin-bottom: 5px;
  display: list-item;
  text-align: -webkit-match-parent;

  & > a {
    font-size: 2rem;
    padding: 15px;
    color: currentcolor;
    display: block;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 96ms linear;
    position: relative;

    &::after {
      position: absolute;
      background-color: #f2a655;
      bottom: -15px;
      content: "";
      display: ${({ active }) => (active ? "block" : "none")};
      height: 4px;
      left: 15px;
      right: 15px;
    }

    &:hover {
      color: #f4a655;
    }
  }
`;

const LayoutContainer = styled.div`
  width: 100%;
  position: absolute;
  padding: 2rem;
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

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
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

export default Layout;
