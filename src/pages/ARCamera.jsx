import ARCameraLayout from "../components/ARCameraLayout";

import { isMobile } from "mobile-device-detect";
import { useAmbassadorData } from "../hooks/useAmbassadorData";
import { useEffect } from "react";

const ARCamera = () => {
  const { data, status } = useAmbassadorData();

  useEffect(() => {
    if (!isMobile) window.location.href = "/ambassadeurs";
  }, []);

  if (status !== "FETCHED") return "Loading";

  return (
    <ARCameraLayout>
      <a-scene
        cursor="rayOrigin: mouse"
        raycaster="objects: .clickable;"
        vr-mode-ui="enabled: false"
        arjs="detectionMode: mono_and_matrix; matrixCodeType: 3x3;"
        renderer="logarithmicDepthBuffer: true;colorManagement: true;"
      >
        {Object.keys(data).map((key) => {
          return (
            <a-marker
              key={key}
              markercomp
              data-id={data[key]?.markerData?.dataId}
              data-ambassador={data[key]?.markerData?.name}
              type="barcode"
              value={data[key]?.markerData?.marker}
            >
              <a-entity
                id={data[key]?.markerData?.dataId}
                gltf-model={data[key]?.markerData?.model}
                scale="0.01 0.01 0.01"
                look-at="[camera]"
                data-ambassador={data[key]?.markerData?.name}
                position="-100 -100 -100"
                rotation="-90 0 0"
                class="clickable"
                treeman
              ></a-entity>
            </a-marker>
          );
        })}
        <a-light
          type="point"
          color="#fff"
          intensity="1"
          decay="2"
          look-at="[treeman]"
        ></a-light>
        <a-entity camera id="arjscamera"></a-entity>
      </a-scene>
    </ARCameraLayout>
  );
};

export default ARCamera;
