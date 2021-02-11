import React from "react";
import { Marker } from "react-map-gl";
import { useStateMap } from "../hooks/useMapHook";
import styled from "styled-components";
import { useAmbassadorData } from "../hooks/useAmbassadorData";

export const Markers = ({ selectedMarkerState }) => {
  const { data, status } = useAmbassadorData();
  const [selectedMarker, setSelecterMarker] = selectedMarkerState;

  const getMarkerImage = (ambassador_name, selected) => {
    if (selected) return data[ambassador_name]?.selectedMarkerImage;
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
            onClick={() => {
              if (selectedMarker?.id === `${marker.name}_${index}`)
                return setSelecterMarker();
              setSelecterMarker({
                id: `${marker.name}_${index}`,
                lat: marker.coords[1],
                long: marker.coords[0],
              });
            }}
            src={`./assets/images/${getMarkerImage(
              marker.name,
              selectedMarker?.id === `${marker.name}_${index}`
            )}`}
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
