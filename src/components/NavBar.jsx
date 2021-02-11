import styled from "styled-components";
import iconTickets from "../assets/images/icon-tickets.svg";
import logoKortrijk from "../assets/images/logo-kortrijk.svg";

const NavBar = () => (
  <Container>
    <NavLinks>
      <NavLink>
        <a href="https://mementowoordfestival.be/programma/">Programma</a>
      </NavLink>
      <NavLink>
        <a href="https://mementowoordfestival.be/woordroute/">Woordroute</a>
      </NavLink>
      <NavLink active>
        <a href="/ambassadeurs">Ambassadeurs</a>
      </NavLink>
      <NavLink>
        <a href="https://mementowoordfestival.be/partners/">Partners</a>
      </NavLink>
    </NavLinks>
    <Actions>
      <TicketsButton href="https://mementowoordfestival.be/tickets/">
        <img src={iconTickets} alt="Tickets icon" />
        Tickets
      </TicketsButton>
      <KortrijkButton href="https://kortrijk.be/">
        <img src={logoKortrijk} alt="logo Kortrijk" />
      </KortrijkButton>
    </Actions>
  </Container>
);

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
  color: white;
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

const Container = styled.nav`
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

export default NavBar;
