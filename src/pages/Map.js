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
  const [newPin, setNewPin] = useState();
  const [mapData, setMapData] = useState({
    date: "",
    rating: "",
    location: "",
    notes: "",
  });
  // eslint-disable-next-line
  const localStorageData = {
    date: localStorage.getItem("date"),
    location: localStorage.getItem("location"),
    rating: localStorage.getItem("rating"),
    notes: localStorage.getItem("notes"),
  };

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

  const handleMarkerClick = (id, lat, long) => {
    setCurrentPlaceId(id);
    setViewport({ ...viewport, latitude: lat, longitude: long });
  };

  const handleAddClick = (event) => {
    const [long, lat] = event.lngLat;
    setNewPin({
      lat,
      long,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    localStorage.setItem("date", mapData.date);
    localStorage.setItem("location", mapData.location);
    localStorage.setItem("rating", mapData.rating);
    localStorage.setItem("notes", mapData.notes);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setMapData({
      ...mapData,
      [name]: value,
    });
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
        onDblClick={handleAddClick}
        transitionDuration="150"
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
                onClick={() => handleMarkerClick(p.id, p.lat, p.long)}
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
        {newPin && (
          <Popup
            longitude={newPin.long}
            latitude={newPin.lat}
            closeButton={true}
            closeOnClick={false}
            anchor="left"
            onClose={() => setNewPin()}
          >
            <div>
              <form className="Form" onSubmit={handleSubmit}>
                <label>Where?</label>
                <input
                  onChange={handleChange}
                  className="pinLocation"
                  name="location"
                  id="pinLocation"
                  type="text"
                  required
                />

                <label>When?</label>
                <input
                  onChange={handleChange}
                  className="pinDate"
                  name="date"
                  id="pinDate"
                  type="date"
                  required
                />
                <label>Rating</label>
                <select
                  className="pinRating"
                  name="rating"
                  onChange={handleChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <label>Notes</label>
                <textarea
                  onChange={handleChange}
                  className="pinNotes"
                  name="notes"
                  id="pinNotes"
                  type="text"
                  placeholder="add notes here..."
                  maxlenght="200"
                  required
                />
                <label className="Upload" htmlFor="upload"></label>
                <input
                  className="pinPicture"
                  name="pinPicture"
                  id="pinPicture"
                  type="file"
                  accept="image/png, image/jpeg"
                />

                <button type="submit" className="SubmitButton">
                  add pin
                </button>
              </form>
            </div>
          </Popup>
        )}
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
