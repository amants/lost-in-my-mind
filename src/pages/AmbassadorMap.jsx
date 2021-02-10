import { useState } from "react";
import styled from "styled-components";
import Layout from "../components/MapLayout";
import InfoPopUpAmbassadors from "../components/InfoPopUpAmbassadors";
import AmbassadorMap from "../components/AmbassadorMap";
import { MapProvider } from "../hooks/useMapHook";
import AppNav from "../components/AppNav";
const Ambassadors = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Layout>
      {showInfo && <InfoPopUpAmbassadors dispatch={() => setShowInfo(false)} />}
      <Container>
        <MapProvider>
          <AmbassadorMap />
        </MapProvider>
      </Container>
      <AppNav activePage="map" />
    </Layout>
  );
};

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export default Ambassadors;
