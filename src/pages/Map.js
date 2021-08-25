import "./Map.css";
import ReactMapGl, { Marker } from "react-map-gl";
import { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Map() {
  const [viewport, setViewport] = useState({
    longitude: 11.576124,
    latitude: 48.137154,
    height: "100vh",
    width: "100vw",
    zoom: 4,
  });
  return (
    <div className="Map">
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
        mapStyle="mapbox://styles/farapara/cksh5t2bc6to818nta74mtluc"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        <Marker
          longitude={23.72611}
          latitude={37.970833}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <FaMapMarkerAlt
            style={{ fontSize: viewport.zoom * 7, color: "#e8abb9" }}
          />
        </Marker>
      </ReactMapGl>
    </div>
  );
}
