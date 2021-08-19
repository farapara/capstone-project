import "./AddProfileForm.css";

export default function AddProfileForm() {
  return (
    <div className="AddProfileForm">
      <form className="ProfileForm">
        <p className="Ptag">Name:</p>
        <input
          name="userName"
          id="userName"
          type="text"
          placeholder="enter a name"
          maxLength="10"
          required
        />
        <p className="Ptag">Bio:</p>
        <textarea
          name="userBio"
          id="userBio"
          type="text"
          placeholder="add bio here..."
          maxlenght="200"
          required
        />
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
