import "./Map.css";
import ReactMapGl from "react-map-gl";
import { useState } from "react";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 42.4211,
    longitude: 24.345,
    width: "590px",
    height: "450px",
    zoom: 0,
  });
  return (
    <div>
      <ReactMapGl {...viewport}>markers here</ReactMapGl>
    </div>
  );
}
