import { useEffect } from "react";
import styled from "styled-components";
const App = () => {
  const openModal = (eventData) => {
    console.log("opening modal");
  };

  useEffect(() => {
    document.addEventListener("model-clicked", (eventData) => {
      // Function to open model
      openModal(eventData);
    });

    return () => {
      document.removeEventListener("model-clicked", () => {});
    };
  }, []);
  return (
    <>
      <Logo src="./assets/images/logo.png"></Logo>
      <Menu>Menu</Menu>
      <Info>Info</Info>
      <a-scene
        cursor="rayOrigin: mouse"
        raycaster="objects: .clickable;"
        vr-mode-ui="enabled: false"
        arjs="detectionMode: mono_and_matrix; matrixCodeType: 3x3;"
        renderer="logarithmicDepthBuffer: true;colorManagement: true;"
      >
        <a-asset>
          <a-asset-item
            id="gltftree"
            src="./models/Lize_world_aanpassing.gltf"
          ></a-asset-item>
        </a-asset>
        <a-marker markercomp data-id="tree" type="barcode" value="1">
          <a-entity
            id="tree"
            gltf-model="./models/Lize_world_aanpassing.gltf"
            scale="0.01 0.01 0.01"
            treeman
            data-ambassador="Lize"
            position="0 -3 2"
            rotation="-90 0 0"
            class="clickable"
          ></a-entity>
        </a-marker>
        <a-marker markercomp data-id="treedalilla" ype="barcode" value="2">
          <a-entity
            id="treedalilla"
            gltf-model="./models/Dalilla_world_aanpassing.gltf"
            scale="0.01 0.01 0.01"
            data-ambassador="Dalilla"
            treeman
            position="0 -3 2"
            rotation="-90 0 0"
            class="clickable"
          ></a-entity>
        </a-marker>
        <a-marker markercomp data-id="treejoost" type="barcode" value="6">
          <a-entity
            id="treejoost"
            gltf-model="./models/wereld_joost_aanpassing.gltf"
            data-ambassador="Joost"
            scale="0.01 0.01 0.01"
            treeman
            position="0 -3 2"
            rotation="-90 0 0"
            class="clickable"
          ></a-entity>
        </a-marker>
        <a-light type="point" color="white" position="0 5 0"></a-light>
        <a-entity camera id="arjscamera"></a-entity>
      </a-scene>
    </>
  );
};

const Menu = styled.div`
  position: fixed;
  right: 1.5rem;
  top: 3rem;
  background-color: #2e2457;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff2ea;
  padding: 8px 15px 10px;
  border-radius: 4px;
  font-size: 1.125rem;
  letter-spacing: 0.5px;
  font-family: gt-pressura, sans-serif;
`;

const Logo = styled.img`
  position: fixed;
  left: 1.5rem;
  top: 1rem;
`;

const Info = styled.div`
  position: fixed;
  left: 1.5rem;
  bottom: 1.5rem;
  position: absolute;
  background-color: #f2a655;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  padding: 8px 15px 10px;
  border-radius: 4px;
  font-size: 1.125rem;
  letter-spacing: 0.5px;
  font-family: gt-pressura, sans-serif;
`;

export default App;
