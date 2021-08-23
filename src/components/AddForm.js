import "./AddForm.css";
import { useEffect, useState } from "react";
import { uuid } from "uuidv4";

export default function AddForm() {
  const createdMemory = JSON.parse(localStorage.getItem("memoriesList")) || [];
  const [newMemory, setNewMemory] = useState(createdMemory);

  function handleSubmitMemory(event) {
    event.preventDefault();
    const form = event.target;
    console.log(form);

    const pinLocation = form.pinLocation.value;
    const pinDate = form.pinDate.value;
    const pinRating = form.pinRating.value;
    const pinNotes = form.pinNotes.value;
    const pinPicture = form.pinPicture.value;
    const id = uuid;

    const newMemoryInput = {
      id,
      pinLocation,
      pinDate,
      pinRating,
      pinNotes,
      pinPicture,
    };

    setNewMemory([...newMemory, newMemoryInput]);

    form.reset();
  }

  useEffect(() => {
    localStorage.setItem("memoriesList", JSON.stringify(newMemory));
  }, [newMemory]);

  return (
    <div className="AddForm">
      <form className="Form" onSubmit={handleSubmitMemory}>
        <p className="Ptag">Where?</p>
        <input
          name="pinLocation"
          id="pinLocation"
          type="text"
          placeholder="enter a location"
          required
        />
        <p className="Ptag">When?</p>
        <input name="pinDate" id="pinDate" type="date" required />
        <p className="Ptag">Rating:</p>
        <input
          name="pinRating"
          id="pinRating"
          type="number"
          min="0"
          max="5"
          required
        />
        <p className="Ptag">Notes</p>
        <textarea
          name="pinNotes"
          id="pinNotes"
          type="text"
          placeholder="add notes here..."
          maxlenght="200"
          required
        />
        <label className="Upload" htmlFor="upload"></label>
        <input
          name="pinPicture"
          id="pinPicture"
          type="file"
          required
          accept="image/png, image/jpeg"
        />

        <button type="submit" className="Submit">
          save
        </button>
      </form>
    </div>
  );
}
