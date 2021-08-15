import "./Profile.css";

export default function Profile() {
  return (
    <section>
      <h2>you can create your profile here!</h2>
      <div className="Form">
        <form className="ProfileForm">
          <p>Name:</p>
          <textarea
            name=""
            id=""
            type="text"
            placeholder="enter a name"
            maxLength="10"
            required
          ></textarea>
          <p>Age:</p>
          <textarea
            name=""
            id=""
            type="number"
            min="0"
            placeholder="enter an age"
            required
          ></textarea>
          <p>Bio:</p>
          <textarea
            name=""
            id=""
            type="text"
            placeholder="add bio here..."
            maxlenght="200"
            required
          />
          <div value="">200</div>
        </form>
      </div>
      <label className="Upload" for="upload"></label>
      <input class name="" id="" type="file" required />

      <div className="FormButtons">
        <button className="Submit">save</button>
        <button className="Cancel">cancel</button>
      </div>
    </section>
  );
}
