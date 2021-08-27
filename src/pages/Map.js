import "./Map.css";
import ReactMapGl, {
  Marker,
  Popup,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl";
import { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 42.123,
    longitude: 10.123,
    height: "100vh",
    width: "100vw",
    zoom: 4,
  });

  const geolocateStyle = {
    float: "left",
    margin: "10px",
    padding: "10px",
  };

  const navControlStyle = {
    right: 10,
    top: 10,
  };
  function renderMarkers() {
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
          <Popup
            longitude={23.72611}
            latitude={37.970833}
            closeButton={true}
            closeOnClick={false}
            anchor="left"
          >
            <div className="PinCard">
              <label className="PinCardLabel">Location</label>
              <p className="PinCardDesc"></p>
              <label className="PinCardLabel">Date</label>
              <p className="PinCardDesc"></p>
              <label className="PinCardLabel">Rating</label>
              <div className="PinCardDesc">5</div>
              <label className="PinCardLabel">Notes</label>
              <p className="PinCardDesc">Happy place</p>
            </div>
          </Popup>
          <NavigationControl style={navControlStyle} />
          <GeolocateControl
            style={geolocateStyle}
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
        </ReactMapGl>
      </div>
    );
  }
  return <div>{renderMarkers()} </div>;
}
