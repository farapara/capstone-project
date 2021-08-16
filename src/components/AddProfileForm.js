export default function AddProfileForm() {
  return (
    <div className="Form-Wrapper">
      <form className="ProfileForm">
        <p>Name:</p>
        <textarea
          name="userName"
          id="userName"
          type="text"
          placeholder="enter a name"
          maxLength="10"
          required
        ></textarea>
        <p>Age:</p>
        <textarea
          name="userAge"
          id="userAge"
          type="number"
          min="0"
          placeholder="enter an age"
          required
        ></textarea>
        <p>Bio:</p>
        <textarea
          name="userBio"
          id="userBio"
          type="text"
          placeholder="add bio here..."
          maxlenght="200"
          required
        />
        <div value="">200</div>

        <label className="Upload" htmlFor="upload"></label>
        <input name="userPicture" id="userPicture" type="file" required />

        <div className="FormButtons">
          <button className="Submit">save</button>
          <button className="Cancel">cancel</button>
        </div>
      </form>
    </div>
  );
}
