import "./Map.css";
import ReactMapGl, {
  Marker,
  Popup,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl";
import { useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

export default function Map() {
  const [pins, setPins] = useState({ pins: [] });
  const [currentPlaceId, setCurrentPlaceId] = useState();
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

  useEffect(() => {
    const url = "/api/pins.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPins(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleMarkerClick = (id) => {
    setCurrentPlaceId(id);
  };

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
        {pins.pins.map((p) => (
          <>
            <Marker
              longitude={p.long}
              latitude={p.lat}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <FaMapMarkerAlt
                style={{
                  fontSize: viewport.zoom * 7,
                  color: "#e8abb9",
                  cursor: "pointer",
                }}
                onClick={() => handleMarkerClick(p.id)}
              />
            </Marker>
            {p.id === currentPlaceId && (
              <Popup
                longitude={p.long}
                latitude={p.lat}
                closeButton={true}
                closeOnClick={false}
                anchor="left"
                onClose={() => setCurrentPlaceId()}
              >
                <div className="PinCard">
                  <label className="PinCardLabel">Location</label>
                  <p className="PinCardDesc">{p.location}</p>
                  <label className="PinCardLabel">Date</label>
                  <p className="PinCardDesc">{p.date}</p>
                  <label className="PinCardLabel">Rating</label>
                  <div className="PinStar">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <label className="PinCardLabel">Notes</label>
                  <p className="PinCardDesc">{p.notes}</p>
                </div>
              </Popup>
            )}
          </>
        ))}
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
