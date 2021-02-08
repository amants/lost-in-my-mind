import styled from "styled-components";
import { useEffect, useRef } from "react";

const PopUpComponent = ({ dispatch }) => {
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
      <Menu onClick={() => closePopUp(false)}>Menu</Menu>
      <LinkItems>
        <LinkItem>Programma</LinkItem>
        <LinkItem>Expo</LinkItem>
        <LinkItem>Tijdschema</LinkItem>
        <LinkItem>Praktische info</LinkItem>
        <LinkItem>Partners</LinkItem>
        <LinkItem>Ambassadeurs</LinkItem>
        <LinkItem>
          <TicketItem>
            <img src="./assets/images/icon-tickets.svg" alt="Icon tickets" />
            Tickets
          </TicketItem>
        </LinkItem>
      </LinkItems>
    </Container>
  );
};

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

  &:hover {
    color: #fc7352;
  }

  transition: all 0.2s ease;
`;
const TicketItem = styled.a`
  display: inline-flex;
  align-items: cemter;
  justify-content: center;
  padding: 1rem;
  background: #f2a655;
  border-radius: 5px;
  font-size: 1.75rem;

  & > img {
    margin-right: 1rem;
  }
`;

const Menu = styled.a`
  position: fixed;
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

const Container = styled.div`
  display: flex;
  opacity: 0;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;
  bottom: 0;
  flex-direction: column;
  background-color: #2e2457;
  transition: all 0.2s ease;
`;

export default PopUpComponent;