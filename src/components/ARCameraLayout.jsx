import { useState, useEffect } from "react";
import styled from "styled-components";

import InfoPopUp from "../components/InfoPopUp";
import MenuPopUp from "../components/MenuPopUp";
import AmbassadorPopUp from "../components/AmbassadorPopUp";
import logo from "../assets/images/logo.svg";
import { useAmbassadorData } from "../hooks/useAmbassadorData";
const ARCameraLayout = ({ children }) => {
  const [showInfo, setShowInfo] = useState(
    !sessionStorage.getItem("info-seen")
  );
  const ambassadorData = useAmbassadorData();
  const [showMenu, setShowMenu] = useState(false);
  const [ambassadorPopUp, setAmbassadorPopup] = useState();

  useEffect(() => {
    if (ambassadorData?.status !== "FETCHED") return;
    const { data } = ambassadorData || {};
    const getAmbassadorColors = (ambassador) => {
      return data?.[ambassador]?.colors;
    };

    const getAmbassadorData = (ambassador, model) => {
      let tempModelData;
      Object.values(data?.[ambassador]?.clickableModels)?.forEach(
        (modelData) => {
          if (modelData?.modelClickNames?.includes(model)) {
            tempModelData = modelData;
          }
        }
      );
      return tempModelData;
    };
    const openModal = (eventData) => {
      const { ambassador, clickedModel } = eventData?.detail || {};
      console.log(clickedModel);
      const modalData = getAmbassadorData(ambassador, clickedModel);
      if (!modalData) return;
      setAmbassadorPopup({
        colors: getAmbassadorColors(ambassador),
        content: modalData,
      });
    };

    document.addEventListener("model-clicked", (eventData) => {
      openModal(eventData);
    });

    return () => {
      document.removeEventListener("model-clicked", () => {});
    };
  }, [ambassadorData]);

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
      <Logo src={logo}></Logo>
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
  width: 6rem;
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
