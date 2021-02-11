import { useState } from "react";
import styled from "styled-components";
import Layout from "../components/MapLayout";
import InfoPopUpAmbassadors from "../components/InfoPopUpAmbassadors";
import ProblemReportModal from "../components/ProblemReportModal";
import AmbassadorMap from "../components/AmbassadorMap";
import { MapProvider } from "../hooks/useMapHook";
import AppNav from "../components/AppNav";
const Ambassadors = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState();
  const [showProblemModal, setShowProblemModal] = useState();
  return (
    <Layout selectedMarker={selectedMarker}>
      {showInfo && <InfoPopUpAmbassadors dispatch={() => setShowInfo(false)} />}
      {showProblemModal && (
        <ProblemReportModal
          marker={selectedMarker}
          dispatch={() => setShowProblemModal(false)}
        />
      )}
      <Container>
        <ProblemButton
          disabled={!selectedMarker}
          onClick={() => setShowProblemModal(true)}
        >
          Probleem melden
        </ProblemButton>
        <RouteButton
          disabled={!selectedMarker}
          className={!selectedMarker && "disabled"}
          target="_blank"
          href={`http://maps.google.com/maps?q=${selectedMarker?.lat},${selectedMarker?.long}&navigate=yes`}
        >
          Bereken route
        </RouteButton>
        <MapProvider>
          <AmbassadorMap
            selectedMarkerState={[selectedMarker, setSelectedMarker]}
          />
        </MapProvider>
      </Container>
      <AppNav activePage="map" />
    </Layout>
  );
};

const ProblemButton = styled.button`
  position: fixed;
  right: 2rem;
  text-decoration: none;
  bottom: 8rem;
  z-index: 2;
  position: absolute;
  font-weight: 700;
  text-transform: uppercase;
  background: rgba(249, 247, 245, 0.5);
  border: 2px solid #f2a655;
  color: #f2a655;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 8px 15px 10px;
  border-radius: 4px;
  font-size: 1.3rem;
  letter-spacing: 0.5px;
  cursor: pointer;
  font-family: gt-pressura, sans-serif;

  &:disabled {
    opacity: 0;
    cursor: not-allowed;
    visibility: hidden;
  }

  @media screen and (min-width: 900px) {
    display: none;
  }

  transition: all 0.2s ease;
`;

const RouteButton = styled.a`
  position: fixed;
  left: 2rem;
  text-decoration: none;
  bottom: 8rem;
  z-index: 2;
  position: absolute;
  background-color: #f2a655;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  padding: 8px 15px 10px;
  border-radius: 4px;
  font-size: 1.3rem;
  letter-spacing: 0.5px;
  border: 2px solid #f2a655;
  cursor: pointer;
  font-family: gt-pressura, sans-serif;

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }

  transition: all 0.2s ease;

  @media screen and (min-width: 900px) {
    bottom: 2rem;
    z-index: 20;
  }
`;

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export default Ambassadors;
