import React from "react";
import { Marker } from "react-map-gl";
import { useStateMap } from "../hooks/useMapHook";
import styled from "styled-components";
import { useAmbassadorData } from "../hooks/useAmbassadorData";

export const Markers = () => {
  const { data, status } = useAmbassadorData();
  const getMarkerImage = (ambassador_name) => {
    return data[ambassador_name]?.markerImage;
  };
  const { markers } = useStateMap();

  if (status !== "FETCHED") return "Loading";
  return (
    <>
      {markers?.map((marker, index) => (
        <Marker
          key={index}
          offsetTop={-65}
          offsetLeft={-24}
          latitude={marker.coords[1]}
          longitude={marker.coords[0]}
        >
          <MarkerImage
            src={`./assets/images/${getMarkerImage(marker.name)}`}
            alt="Marker_image"
          />
        </Marker>
      ))}
    </>
  );
};

const MarkerImage = styled.img`
  width: 6rem;
`;
