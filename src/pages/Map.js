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
//import { MdFavoriteBorder } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import PinImage from "../components/PinImage";
import { uuid } from "uuidv4";

export default function Map() {
  // This is for existing pins
  const [pins, setPins] = useState(() => {
    const pinsLS = JSON.parse(localStorage.getItem("pins")) || [];
    return pinsLS;
  });
  const [currentPlaceId, setCurrentPlaceId] = useState();

  // For the create form
  const [coordinates, setCoordinates] = useState();
  const [location, setLocation] = useState();
  const [date, setDate] = useState();
  const [rating, setRating] = useState(1);
  const [notes, setNotes] = useState();
  const [imageUrl, setImageUrl] = useState("");
  // eslint-disable-next-line
  const [isImageLoading, setIsImageLoading] = useState(false);

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
  // useEffect(() => {
  //   const url = "/api/pins.json";
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPins(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    localStorage.setItem("pins", JSON.stringify(pins));
  }, [pins]);

  const handleMarkerClick = (id, lat, long) => {
    setCurrentPlaceId(id);
    setViewport({ ...viewport, latitude: lat, longitude: long });
  };

  const handleAddClick = (event) => {
    const [long, lat] = event.lngLat;
    setCoordinates({
      lat,
      long,
    });
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "vma7udud");
    setIsImageLoading(true);

    const res = await fetch(
      " https://api.cloudinary.com/v1_1/dpwb98vu5/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();

    setImageUrl(file.secure_url);
    setIsImageLoading(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newMemory = {
      id: uuid(),
      location,
      date,
      rating,
      notes,
      lat: coordinates.lat,
      long: coordinates.long,
      imageUrl,
    };

    setPins([...pins, newMemory]);
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
        doubleClickZoom={false}
        onDblClick={handleAddClick}
        transitionDuration="150"
      >
        {pins.map((pin) => (
          <>
            <Marker
              longitude={pin.long}
              latitude={pin.lat}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <FaMapMarkerAlt
                style={{
                  fontSize: viewport.zoom * 7,
                  color: "#e8abb9",
                  cursor: "pointer",
                }}
                onClick={() => handleMarkerClick(pin.id, pin.lat, pin.long)}
              />
            </Marker>
            {pin.id === currentPlaceId && (
              <Popup
                longitude={pin.long}
                latitude={pin.lat}
                closeButton={true}
                closeOnClick={false}
                anchor="bottom"
                onClose={() => setCurrentPlaceId()}
              >
                <div className="PinCard" key={pin.id}>
                  <div className="PinImageContent">
                    <PinImage src={pin.imageUrl} alt={pin.location} />
                  </div>

                  <label className="PinCardLabel">Location</label>
                  <p className="PinCardDesc">{pin.location}</p>
                  <label className="PinCardLabel">Date</label>
                  <p className="PinCardDesc">{pin.date}</p>
                  <label className="PinCardLabel">Rating</label>
                  <div className="PinStar">
                    {Array(pin.rating).fill(<AiFillStar />)}
                  </div>
                  <label className="PinCardLabel">Notes</label>
                  <p className="PinCardDesc">{pin.notes}</p>
                  {/* <div className="PinCardOptionsButtons">
                    <button
                      onClick={() => remove.Marker(pin.id)}
                      className="DeleteOptionButton"
                    >
                      <AiOutlineDelete style={{ color: "#cc8696" }} />
                    </button>
                    <button clas>
                      <AiOutlineEdit style={{ color: "#cc8696" }} />
                    </button>
                    <button>
                      <MdFavoriteBorder style={{ color: "#cc8696" }} />
                    </button>
                  </div> */}
                </div>
              </Popup>
            )}
          </>
        ))}
        {coordinates && (
          <Popup
            longitude={coordinates.long}
            latitude={coordinates.lat}
            closeButton={true}
            closeOnClick={false}
            anchor="left"
            onClose={() => setCoordinates()}
          >
            <div>
              <form className="Form" onSubmit={handleSubmit}>
                <label>Where?</label>
                <input
                  onChange={(event) => setLocation(event.target.value)}
                  className="pinLocation"
                  name="pinLocation"
                  id="pinLocation"
                  type="text"
                  placeholder="title"
                />
                <label>When?</label>
                <input
                  onChange={(event) => setDate(event.target.value)}
                  className="pinDate"
                  name="pinDate"
                  id="pinDate"
                  type="date"
                />
                <label>Rating</label>
                <select
                  className="pinRating"
                  onChange={(event) => setRating(Number(event.target.value))}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <label>Notes</label>
                <textarea
                  onChange={(event) => setNotes(event.target.value)}
                  className="pinNotes"
                  name="pinNotes"
                  id="pinNotes"
                  type="text"
                  placeholder="add notes here..."
                  maxlenght="200"
                />
                <label className="Upload" htmlFor="upload"></label>
                <input
                  onChange={uploadImage}
                  className="pinPicture"
                  name="pinPicture"
                  id="pinPicture"
                  type="file"
                  accept="image/png, image/jpeg"
                />

                {isImageLoading ? (
                  <p>Loading...</p>
                ) : (
                  <img
                    className="hidden"
                    src={imageUrl}
                    alt=""
                    style={{
                      height: "13vh",
                      width: "13vh",
                      "border-radius": "50%",
                    }}
                  />
                )}

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
