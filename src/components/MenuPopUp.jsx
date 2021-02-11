import { useEffect, useRef } from "react";
import styled from "styled-components";
import { func } from "prop-types";

import iconTickets from "../assets/images/icon-tickets.svg";
import logo from "../assets/images/logo.svg";
import logoKortrijk from "../assets/images/logo-kortrijk.svg";
const MenuPopUp = ({ dispatch }) => {
  const menuRef = useRef();

  const closePopUp = (e) => {
    if (e) e.preventDefault();
    menuRef.current.style.opacity = 0;
    setTimeout(() => {
      dispatch();
    }, 200);
  };

  useEffect(() => {
    menuRef.current.style.opacity = 1;
  }, []);

  return (
    <Container ref={menuRef}>
      <Logo src={logo} alt="Memento logo"></Logo>
      <Menu onClick={() => closePopUp(false)}>Menu</Menu>
      <LinkItems>
        <LinkItem href="https://mementowoordfestival.be/programma/">
          Programma
        </LinkItem>
        <LinkItem href="https://mementowoordfestival.be/woordroute/">
          Woordroute
        </LinkItem>
        <LinkItem href="https://mementowoordfestival.be/partners/">
          Partners
        </LinkItem>
        <LinkItem href="ambassadeurs">Ambassadeurs</LinkItem>
        <LinkItem href="https://mementowoordfestival.be/tickets/">
          <TicketItem>
            <img src={iconTickets} alt="Icon tickets" />
            Tickets
          </TicketItem>
        </LinkItem>
      </LinkItems>
      <LinkItem href="https://kortrijk.be/">
        <KortrijkButton>
          <img src={logoKortrijk} alt="logo Kortrijk" />
        </KortrijkButton>
      </LinkItem>
    </Container>
  );
};

const KortrijkButton = styled.div`
  & > img {
    width: 30px;
    margin-right: 1rem;
  }
`;

const LinkItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  justify-content: center;
`;
const LinkItem = styled.a`
  color: white;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  padding: 1rem;
  font-size: 2.5rem;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    color: #fc7352;
  }

  transition: all 0.2s ease;
`;
const TicketItem = styled.div`
  display: inline-flex;
  align-items: cemter;
  justify-content: center;
  padding: 1rem;
  color: white;
  text-decoration: none;
  background: #f2a655;
  border-radius: 5px;
  font-size: 1.75rem;

  & > img {
    margin-right: 1rem;
  }
`;

const Logo = styled.img`
  position: absolute;
  left: 1.5rem;
  z-index: 2;
  top: 1rem;
  width: 6rem;
`;

const Menu = styled.a`
  position: fixed;
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
  z-index: 2;
  letter-spacing: 0.5px;
  font-family: gt-pressura, sans-serif;
`;

const Container = styled.div`
  display: flex;
  opacity: 0;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
  bottom: 0;
  justify-content: space-between;
  flex-direction: column;
  background-color: #2e2457;
  transition: all 0.2s ease;
`;

MenuPopUp.propTypes = {
  dispatch: func.isRequired,
};

export default MenuPopUp;
