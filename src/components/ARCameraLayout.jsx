import { useState } from "react";
import styled from "styled-components";

// import PopUpComponent from "../components/PopUpComponent";
import InfoPopUp from "../components/InfoPopUp";
const ARCameraLayout = ({ children }) => {
  const [showInfo, setShowInfo] = useState(true);

  return (
    <>
      <InfoPopUp />
      <Logo src="./assets/images/logo.png"></Logo>
      <Menu>Menu</Menu>
      <Info>Info</Info>
      <AframeContainer>{children}</AframeContainer>
    </>
  );
};

const AframeContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  overflow: hidden;
`;

const Menu = styled.div`
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
  letter-spacing: 0.5px;
  font-family: gt-pressura, sans-serif;
`;

const Logo = styled.img`
  position: fixed;
  left: 1.5rem;
  top: 1rem;
`;

const Info = styled.div`
  position: fixed;
  left: 1.5rem;
  bottom: 1.5rem;
  position: absolute;
  background-color: #f2a655;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  padding: 8px 15px 10px;
  border-radius: 4px;
  font-size: 1.125rem;
  letter-spacing: 0.5px;
  font-family: gt-pressura, sans-serif;
`;

export default ARCameraLayout;
