import "./AddProfileForm.css";
import uuid from "react-uuid";

export default function AddProfileForm() {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const userName = form.userName.value;
    const userBio = form.userBio.value;
    const userPicture = form.userPicture.value;
    const id = uuid();

    const newProfileInput = {
      id,
      userName,
      userBio,
      userPicture,
    };

    localStorage.setItem("newProfileInput", JSON.stringify(newProfileInput));
    form.reset();
  }

  return (
    <div className="AddProfileForm">
      <form className="ProfileForm" onSubmit={handleSubmit}>
        <p className="Ptag">Name:</p>
        <input
          className="userName"
          name="userName"
          id="userName"
          type="text"
          placeholder="enter a name"
          maxLength="10"
          required
        />
        <p className="Ptag">Bio:</p>
        <textarea
          className="userBio"
          name="userBio"
          id="userBio"
          type="text"
          placeholder="add bio here..."
          maxlenght="200"
          required
        />
        <label className="Upload" htmlFor="upload"></label>
        <input
          className="userPicture"
          name="userPicture"
          id="userPicture"
          type="file"
          accept="image/png, image/jpeg"
          required
        />

        <button type="submit" className="Submit">
          save
        </button>
      </form>
    </div>
  );
}
