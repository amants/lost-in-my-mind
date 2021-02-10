import { useState } from "react";
import styled from "styled-components";
import Layout from "../components/MapLayout";
import InfoPopUpAmbassadors from "../components/InfoPopUpAmbassadors";
import AmbassadorMap from "../components/AmbassadorMap";
import { MapProvider } from "../hooks/useMapHook";
import AppNav from "../components/AppNav";
const Ambassadors = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState();
  return (
    <Layout selectedMarker={selectedMarker}>
      {showInfo && <InfoPopUpAmbassadors dispatch={() => setShowInfo(false)} />}
      <Container>
        {selectedMarker && (
          <RouteButton
            href={`http://maps.google.com/maps?q=${selectedMarker?.lat},${selectedMarker?.long}&navigate=yes`}
          >
            Bereken route
          </RouteButton>
        )}
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

const RouteButton = styled.a`
  position: fixed;
  right: 2rem;
  text-decoration: none;
  bottom: 11rem;
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

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export default Ambassadors;
