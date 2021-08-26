import "./AddForm.css";
import uuid from "react-uuid";

export default function AddForm() {
  function handleSubmitMemory(event) {
    event.preventDefault();

    const form = event.target;

    const pinLocation = form.pinLocation.value;
    const pinDate = form.pinDate.value;
    const pinRating = form.pinRating.value;
    const pinNotes = form.pinNotes.value;
    const pinPicture = form.pinPicture.value;
    const id = uuid();

    const storedMemories =
      JSON.parse(localStorage.getItem("storedMemories")) || [];

    const mapboxGeoCodingURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${pinLocation}.json?access_token=${process.env.REACT_APP_MAPBOX_KEY}`;

    fetch(mapboxGeoCodingURL)
      .then((res) => res.json())
      .then((mapboxData) => {
        const newMemoryInput = {
          id,
          pinLocation,
          pinDate,
          pinRating,
          pinNotes,
          pinPicture,
          coordinates: mapboxData.features[0].center,
        };
        const newMemory = [...storedMemories, newMemoryInput];

        localStorage.setItem("storedMemories", JSON.stringify(newMemory));
        form.reset();
      });
  }

  return (
    <div className="AddForm">
      <form className="Form" onSubmit={handleSubmitMemory}>
        <p className="Ptag">Where?</p>
        <input
          className="pinLocation"
          name="pinLocation"
          id="pinLocation"
          type="text"
          placeholder="enter a location"
          required
        />
        <p className="Ptag">When?</p>
        <input
          className="pinDate"
          name="pinDate"
          id="pinDate"
          type="date"
          required
        />
        <p className="Ptag">Rating:</p>
        <input
          className="pinRating"
          name="pinRating"
          id="pinRating"
          type="number"
          min="0"
          max="5"
          required
        />
        <p className="Ptag">Notes</p>
        <textarea
          className="pinNotes"
          name="pinNotes"
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

        <button type="submit" className="Submit">
          save
        </button>
      </form>
    </div>
  );
}
