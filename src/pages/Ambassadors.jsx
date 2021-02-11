import { useState } from "react";
import styled from "styled-components";
import AmbassadorSwiper from "../components/AmbassadorSwiper";
import Layout from "../components/Layout";
import InfoPopUpAmbassadors from "../components/InfoPopUpAmbassadors";
import headerAmbassadorsImage from "../assets/images/header_ambassadors.png";
import AmbassadorMap from "../components/AmbassadorMap";
import AmbassadorPopUp from "../components/AmbassadorPopUp";
import { MapProvider } from "../hooks/useMapHook";
import AppNav from "../components/AppNav";
const Ambassadors = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [ambassadorPopUp, setAmbassadorPopup] = useState();
  return (
    <Layout>
      {ambassadorPopUp && (
        <AmbassadorPopUp
          ambassadorPopUp={ambassadorPopUp}
          dispatch={() => setAmbassadorPopup()}
        />
      )}
      {showInfo && <InfoPopUpAmbassadors dispatch={() => setShowInfo(false)} />}
      <Heading>
        <DesktopHeading>
          <LeftSideHeading />
          <RightSideHeading>
            <h2>Verdwaal in mijn Gedachten</h2>
            <p>
              Leer <span>onze 5 ambassadeurs</span> op een unieke manier kennen.
              Neem een kijkje in hun gedachten en ga op zoek naar wie de auteur
              is en hoe hij of zij denkt.
            </p>
            <p>
              In Kortrijk zijn 5 interactieve affiches te vinden gekoppeld aan
              een ambassadeur. Door de QR-code te scannen krijg je toegang tot
              hun interactieve AR-wereld.
            </p>
          </RightSideHeading>
        </DesktopHeading>
        <MobileHeading>
          <Title>De 5 ambassadeurs</Title>
          <Information onClick={() => setShowInfo(true)}>i</Information>
        </MobileHeading>
      </Heading>
      <AmbassadorSwiper setAmbassadorPopup={setAmbassadorPopup} />
      <DesktopMap>
        <LeftSideMap>
          <h2>Verdwaal in de Binnenstad</h2>
          <p>
            De affiches van de ambassadeurs zijn te vinden op de langgerekte
            interactieve woordroute. Hiernaast zijn de exacte locaties
            weergegeven.
          </p>
          <p>
            Problemen met het vinden van de affiche? Open deze pagina tijdens
            jouw zoektocht met een mobiel apparaat en laat je helpen door de
            routebeschrijving.
          </p>
        </LeftSideMap>
        <RightSideMap>
          <MapProvider>
            <AmbassadorMap selectedMarkerState={[undefined, () => {}]} />
          </MapProvider>
        </RightSideMap>
      </DesktopMap>
      <AppNav activePage="ambassadors" />
    </Layout>
  );
};

const DesktopMap = styled.div`
  display: none;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 1fr;
  color: white;
  border-radius: 12px;
  font-size: 1.5rem;
  line-height: 1.4;
  overflow: hidden;
  margin-bottom: 4rem;

  @media screen and (min-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    display: grid;
  }

  @media screen and (min-width: 900px) {
    display: grid;
  }
`;

const MobileHeading = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const DesktopHeading = styled.header`
  display: none;
  color: white;
  border-radius: 12px;
  font-size: 1.5rem;
  line-height: 1.4;
  overflow: hidden;
  margin-bottom: 4rem;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 1fr;

  @media screen and (min-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    display: grid;
  }

  @media screen and (min-width: 900px) {
    display: grid;
  }
`;
const LeftSideMap = styled.div`
  padding: 5rem;
  background-color: #448774;
  color: white;
  & > h2 {
    font-weight: bold;
    font-size: 24px;
    line-height: 140%;
    margin: 0 0 2rem 0;
  }

  & > p {
    font-weight: normal;
  }
`;

const RightSideMap = styled.div`
  background-image: url(${headerAmbassadorsImage});
  background-size: cover;
  position: relative;
`;

const LeftSideHeading = styled.div`
  background-image: url(${headerAmbassadorsImage});
  background-position: center center;
  background-size: cover;
`;
const RightSideHeading = styled.div`
  padding: 5rem;
  background-color: #2e2457;
  & > h2 {
    font-weight: bold;
    font-size: 24px;
    line-height: 140%;
    color: #f2a655;
    margin: 0 0 2rem 0;
  }

  & > p {
    font-weight: normal;

    & > span {
      color: #f2a655;
    }
  }
`;

const Heading = styled.div`
  display: flex;
  align_items: center;
  justify-content: space-between;
  margin: 0 2rem;

  @media screen and (min-width: 900px) {
    margin: 0;
  }
`;

const Title = styled.h2`
  font-weight: 900;
  font-size: 2.1rem;
  line-height: 3.1rem;
  letter-spacing: 0.03em;
  margin: 0;
  text-transform: uppercase;
  color: #f2a655;
`;

const Information = styled.a`
  text-decoration: none;
  border-radius: 50%;
  border: 2px solid #f2a655;
  height: 2.2rem;
  width: 2.2rem;
  font-weight: 900;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 3.1rem;
  letter-spacing: 0.03em;
  color: #f2a655;
`;

export default Ambassadors;
