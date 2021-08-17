import "./Map.css";
import ReactMapGl from "react-map-gl";
import { useState } from "react";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 48.181984,
    longtitude: 11.552184,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });
  return (
    <div>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      ></ReactMapGl>
    </div>
  );
}
