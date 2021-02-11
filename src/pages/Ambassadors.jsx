import { useState } from "react";
import { isMobile } from "mobile-device-detect";
import styled from "styled-components";
import iconThumb from "../assets/images/icon-thumb.svg";
import litVlaanderen from "../assets/images/literatuur-vlaanderen.svg";
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
        {isMobile ? (
          <MobileHeading>
            <Title>De 5 ambassadeurs</Title>
            <Information onClick={() => setShowInfo(true)}>i</Information>
          </MobileHeading>
        ) : (
          <DesktopHeading>
            <LeftSideHeading />
            <RightSideHeading>
              <h2>Verdwaal in mijn Gedachten</h2>
              <p>
                Leer <span>onze 5 ambassadeurs</span> op een unieke manier
                kennen. Neem een kijkje in hun gedachten en ga op zoek naar wie
                de auteur is en hoe hij of zij denkt.
              </p>
              <p>
                In Kortrijk zijn 5 interactieve affiches te vinden gekoppeld aan
                een ambassadeur. Door de QR-code te scannen krijg je toegang tot
                hun interactieve AR-wereld.
              </p>
            </RightSideHeading>
          </DesktopHeading>
        )}
      </Heading>
      <AmbassadorSwiper setAmbassadorPopup={setAmbassadorPopup} />
      {!isMobile ? (
        <>
          <DesktopMap>
            <LeftSideMap>
              <h2>Verdwaal in de Binnenstad</h2>
              <p>
                De affiches van de ambassadeurs zijn te vinden op de langgerekte
                interactieve woordroute. Hiernaast zijn de exacte locaties
                weergegeven.
              </p>
              <p>
                Problemen met het vinden van de affiche? Open deze pagina
                tijdens jouw zoektocht met een mobiel apparaat en laat je helpen
                door de routebeschrijving.
              </p>
            </LeftSideMap>
            <RightSideMap>
              <MapProvider>
                <AmbassadorMap selectedMarkerState={[undefined, () => {}]} />
              </MapProvider>
            </RightSideMap>
          </DesktopMap>
          <Footer>
            <LitVlaanderenSectie>
              Met de steun van{" "}
              <img src={litVlaanderen} alt="Literatuur vlaanderen" />
            </LitVlaanderenSectie>
            <FacebookSectie>
              <img src={iconThumb} alt="Literatuur vlaanderen" />
              Memento op facebook
            </FacebookSectie>
            <OtherInformation>
              Stad Kortrijk - Grote Markt 54 - 8500 Kortrijk -{" "}
              <a href="mailto:1777@kortrijk.be">1777@kortrijk.be</a> - tel.{" "}
              <a href="tel:1777">1777</a> (gratis)
              <br />
              Alle rechten voorbehouden -{" "}
              <a href="https://www.kortrijk.be/gebruiksvoorwaarden">
                Gebruiksvoorwaarden
              </a>{" "}
              -{" "}
              <a href="https://www.kortrijk.be/privacyverklaring">
                Privacyverklaring
              </a>
            </OtherInformation>
          </Footer>
        </>
      ) : (
        <AppNav activePage="ambassadors" />
      )}
    </Layout>
  );
};

const OtherInformation = styled.div`
  font-size: 1.1rem;
  line-height: 1.5;
  color: #ddd5c9;
  margin-top: 3rem;

  & a {
    color: inherit;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: #342a63;
    }
  }
`;

const Footer = styled.footer`
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  & > a {
    text-decoration: none;
  }
`;

const LitVlaanderenSectie = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  & > img {
    margin-left: 1rem;
    width: 100px;
  }
`;

const FacebookSectie = styled.a`
  font-size: 1.8rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-top: 3rem;
  padding: 1rem;
  background-color: #3b5998;
  color: white;
  font-family: gt-pressura, sans-serif;
  text-transform: uppercase;
  & > img {
    margin-right: 1rem;
  }
`;

const DesktopMap = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 1fr;
  color: white;
  border-radius: 12px;
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 0 2rem;
  overflow: hidden;
  margin-bottom: 4rem;

  @media screen and (min-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
  }
`;

const MobileHeading = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const DesktopHeading = styled.header`
  display: grid;
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
