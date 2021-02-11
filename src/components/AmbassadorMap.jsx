import { useEffect, useState } from "react";
import styled from "styled-components";
import ReactMapGL from "react-map-gl";
import { Markers } from "./Markers";
import { useDispatchMap } from "../hooks/useMapHook";
import { useAmbassadorData } from "../hooks/useAmbassadorData";

const AmbassadorMap = ({ selectedMarkerState }) => {
  const { status, data } = useAmbassadorData();
  const [mapViewPort, setMapViewPort] = useState({
    height: "100%",
    width: "100%",
    longitude: 3.26487,
    latitude: 50.82803,
    zoom: 13.5,
  });
  const mapDispatch = useDispatchMap();

  useEffect(() => {
    if (status !== "FETCHED") return;
    Object.keys(data).forEach((key) => {
      data[key].markers.forEach(({ long, lat }) => {
        mapDispatch({
          type: "ADD_MARKER",
          payload: {
            marker: {
              coords: [long, lat],
              name: key,
            },
          },
        });
      });
    });
  }, [data, status, mapDispatch]);

  return (
    <StyledReactMapGL
      {...mapViewPort}
      mapboxApiAccessToken="pk.eyJ1IjoicmV4YW5pIiwiYSI6ImNra3ZqbHpjeTF4ZHUybnFudTU1ZjdnNHkifQ.qsSBmCSGqB4moH92sZFTng"
      mapStyle="mapbox://styles/rexani/ckkxwqtc90yp617ppigqymx4g"
      showUserLocation={true}
      onViewportChange={(e) => {
        delete e.width;
        delete e.height;
        setMapViewPort((prevValue) => ({
          ...prevValue,
          ...e,
        }));
      }}
    >
      <Markers selectedMarkerState={selectedMarkerState} />
    </StyledReactMapGL>
  );
};
const StyledReactMapGL = styled(ReactMapGL)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;

  .overlays {
    pointer-events: none !important;
  }
`;

export default AmbassadorMap;
