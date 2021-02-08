import { useState, useEffect } from "react";
import styled from "styled-components";

import InfoPopUp from "../components/InfoPopUp";
import MenuPopUp from "../components/MenuPopUp";
import AmbassadorPopUp from "../components/AmbassadorPopUp";

import ambassadorData from "../constants/ambassadorData.json";
const ARCameraLayout = ({ children }) => {
  const [showInfo, setShowInfo] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [ambassadorPopUp, setAmbassadorPopup] = useState();

  useEffect(() => {
    const getAmbassadorColors = (ambassador) => {
      switch (ambassador) {
        case "Lize":
          break;
        case "Dalilla":
          break;
        case "Joost":
          return {
            background: "#1A212A",
            titleColor: "#FF5956",
            textColor: "white",
          };
        default:
          return {
            background: "pink",
          };
      }
    };

    const getAmbassadorData = (ambassador, model) => {
      return ambassadorData?.[ambassador]?.clickableModels?.[model];
    };
    const openModal = (eventData) => {
      console.log(eventData);
      const { ambassador, clickedModel } = eventData?.detail || {};
      const ambassadorData = getAmbassadorData(ambassador, clickedModel);
      if (!ambassadorData) return;
      setAmbassadorPopup({
        colors: getAmbassadorColors(ambassador),
        content: ambassadorData,
      });
    };

    document.addEventListener("model-clicked", (eventData) => {
      openModal(eventData);
    });

    return () => {
      document.removeEventListener("model-clicked", () => {});
    };
  }, []);

  return (
    <>
      {showInfo && <InfoPopUp dispatch={() => setShowInfo(false)} />}
      {showMenu && <MenuPopUp dispatch={() => setShowMenu(false)} />}
      {ambassadorPopUp && (
        <AmbassadorPopUp
          ambassadorPopUp={ambassadorPopUp}
          dispatch={() => setAmbassadorPopup()}
        />
      )}
      <Logo src="./assets/images/logo.png"></Logo>
      <Menu onClick={() => setShowMenu(true)}>Menu</Menu>
      <Info onClick={() => setShowInfo(true)}>Info</Info>
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
  z-index: 0;
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

const Logo = styled.img`
  position: fixed;
  left: 1.5rem;
  z-index: 7;
  top: 1rem;
`;

const Info = styled.a`
  position: fixed;
  left: 1.5rem;
  bottom: 1.5rem;
  z-index: 2;
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
