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
        <ProblemReportModal dispatch={() => setShowProblemModal(false)} />
      )}
      <Container>
        {selectedMarker && (
          <ProblemButton
            disabled={!selectedMarker}
            onClick={() => setShowProblemModal(true)}
          >
            Probleem melden
          </ProblemButton>
        )}
        <RouteButton
          disabled={!selectedMarker}
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

const ProblemButton = styled.a`
  position: fixed;
  left: 2rem;
  text-decoration: none;
  bottom: 8rem;
  z-index: 2;
  position: absolute;
  font-weight: 700;
  text-transform: uppercase;
  background: rgba(249, 247, 245, 0.5);
  /* Web/Rood */

  border: 2px solid #f2a655;
  color: #f2a655;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 8px 15px 10px;
  border-radius: 4px;
  font-size: 1.475rem;
  letter-spacing: 0.5px;
  cursor: pointer;
  font-family: gt-pressura, sans-serif;

  &::disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const RouteButton = styled.a`
  position: fixed;
  right: 2rem;
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
  font-size: 1.475rem;
  letter-spacing: 0.5px;
  cursor: pointer;
  font-family: gt-pressura, sans-serif;

  &::disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export default Ambassadors;
