import React from "react";
import { Marker } from "react-map-gl";
import { useStateMap } from "../hooks/useMapHook";
import styled from "styled-components";
import markerJoost from "../assets/images/marker-joost.png";
import markerStefan from "../assets/images/marker-stefan.png";
import markerLize from "../assets/images/marker-lize.png";
import markerDalilla from "../assets/images/marker-dalilla.png";
import markerAnneleen from "../assets/images/marker-anneleen.png";
import markerDefault from "../assets/images/marker-joost.png";
export const Markers = () => {
  const getMarkerImage = (ambassador_name) => {
    switch (ambassador_name) {
      case "joost":
        return markerJoost;
      case "stefan":
        return markerStefan;
      case "dalilla":
        return markerDalilla;
      case "anneleen":
        return markerAnneleen;
      case "lize":
        return markerLize;
      default:
        return markerDefault;
    }
  };
  const { markers } = useStateMap();
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
          {console.log(marker)}
          <MarkerImage src={getMarkerImage(marker.name)} alt="Marker_image" />
        </Marker>
      ))}
    </>
  );
};

const MarkerImage = styled.img`
  width: 6rem;
`;
