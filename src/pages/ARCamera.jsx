import ARCameraLayout from "../components/ARCameraLayout";

import { useAmbassadorData } from "../hooks/useAmbassadorData";

const ARCamera = () => {
  const { data, status } = useAmbassadorData();

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
                data-ambassador={data[key]?.markerData?.name}
                position="-100 -100 -100"
                rotation="-90 0 0"
                class="clickable"
                treeman
              ></a-entity>
            </a-marker>
          );
        })}
        <a-light type="point" color="white" position="0 5 0"></a-light>
        <a-entity camera id="arjscamera"></a-entity>
      </a-scene>
    </ARCameraLayout>
  );
};

export default ARCamera;
