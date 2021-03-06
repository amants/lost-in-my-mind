/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import styled from "styled-components";

import InfoPopUp from "../components/InfoPopUp";
import MenuPopUp from "../components/MenuPopUp";
import AmbassadorPopUp from "../components/AmbassadorPopUp";
import logo from "../assets/images/logo.svg";
import { useAmbassadorData } from "../hooks/useAmbassadorData";
import AppNav from "./AppNav";
import { node } from "prop-types";
const ARCameraLayout = ({ children }) => {
  const ambassadorData = useAmbassadorData();
  const [showInfo, setShowInfo] = useState(
    !sessionStorage.getItem("info-seen"),
  );
  const [unlockedModelsData, setUnlockedModelsData] = useState(
    JSON.parse(localStorage.getItem("unlocked-ambassadors")) || {},
  );
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
      const clickableModels = data?.[ambassador]?.clickableModels;
      const tempUnlockedModelsData = unlockedModelsData;
      Object.keys(clickableModels)?.forEach((key) => {
        if (clickableModels?.[key]?.modelClickNames?.includes(model)) {
          tempModelData = clickableModels?.[key];
          if (!unlockedModelsData?.[ambassador]?.includes(key)) {
            if (!tempUnlockedModelsData?.[ambassador])
              tempUnlockedModelsData[ambassador] = [];
            tempUnlockedModelsData?.[ambassador]?.push(key);
            localStorage.setItem(
              "unlocked-ambassadors",
              JSON.stringify(unlockedModelsData),
            );
            setUnlockedModelsData(tempUnlockedModelsData);
          }
        }
      });
      return tempModelData;
    };
    const openModal = (eventData) => {
      const { ambassador, clickedModel } = eventData?.detail || {};
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
      <AppNav activePage="camera" />
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
`;

const Logo = styled.img`
  position: fixed;
  left: 2rem;
  z-index: 9;
  top: 1rem;
  width: 6rem;
`;

const Info = styled.a`
  position: fixed;
  left: 2rem;
  bottom: 8rem;
  cursor: pointer;
  z-index: 2;
  position: absolute;
  background-color: #f2a655;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  padding: 8px 15px 10px;
  border-radius: 4px;
  font-size: 1.475rem;
  letter-spacing: 0.5px;
  font-family: gt-pressura, sans-serif;
`;

ARCameraLayout.propTypes = {
  children: node.isRequired,
};

export default ARCameraLayout;
