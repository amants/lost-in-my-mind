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
        {Object.keys(data).map((key) => (
          <a-marker
            key={key}
            markercomp
            data-id={data[key]?.markerData?.dataId}
            type="barcode"
            value={data[key]?.markerData?.marker}
          >
            <a-entity
              id={data[key]?.markerData?.dataId}
              gltf-model={data[key]?.markerData?.model}
              scale="0.01 0.01 0.01"
              treeman
              data-ambassador={data[key]?.markerData?.name}
              position={data[key]?.markerData?.position}
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
