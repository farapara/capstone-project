import "./AddForm.css";

export default function AddForm() {
  return (
    <div className="AddForm">
      <form className="Form">
        <p className="Ptag">Where?</p>
        <input
          name="location"
          id="location"
          type="text"
          placeholder="enter a location"
          required
        />
        <p className="Ptag">When?</p>
        <input name="date" id="date" type="date" required />
        <p className="Ptag">Rating:</p>
        <input
          name="rating"
          id="rating"
          type="number"
          min="0"
          max="5"
          required
        />
        <p className="Ptag">Notes</p>
        <textarea
          name="notes"
          id="notes"
          type="text"
          placeholder="add notes here..."
          maxlenght="200"
          required
        />
        <label className="Upload" htmlFor="upload"></label>
        <input name="picture" id="picture" type="file" required />

        <button className="Submit">save</button>
      </form>
    </div>
  );
}
