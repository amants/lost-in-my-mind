import ARCameraLayout from "../components/ARCameraLayout";

import ambassadors from "../constants/ambassadors.json";

const ARCamera = () => {
  return (
    <ARCameraLayout>
      <a-scene
        cursor="rayOrigin: mouse"
        raycaster="objects: .clickable;"
        vr-mode-ui="enabled: false"
        arjs="detectionMode: mono_and_matrix; matrixCodeType: 3x3;"
        renderer="logarithmicDepthBuffer: true;colorManagement: true;"
      >
        {ambassadors.map((ambassador, i) => (
          <a-marker
            key={i}
            markercomp
            data-id={ambassador.dataId}
            type="barcode"
            value={ambassador.marker}
          >
            <a-entity
              id={ambassador.dataId}
              gltf-model={ambassador.model}
              scale="0.01 0.01 0.01"
              treeman
              data-ambassador={ambassador.name}
              position={ambassador.position}
              rotation="-90 0 0"
              class="clickable"
            ></a-entity>
          </a-marker>
        ))}
        <a-light type="point" color="white" position="0 5 0"></a-light>
        <a-entity camera id="arjscamera"></a-entity>
      </a-scene>
    </ARCameraLayout>
  );
};

export default ARCamera;
