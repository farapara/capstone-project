import "./AddProfileForm.css";
import { useEffect, useState } from "react";
import { uuid } from "uuidv4";

export default function AddProfileForm() {
  const createdProfiles =
    JSON.parse(localStorage.getItem("profileResult")) || [];
  const [newProfile, setNewProfile] = useState(createdProfiles);

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;

    const userName = form.userName.value;
    const userBio = form.userBio.value;
    const userPicture = form.userPicture.value;
    const id = uuid;

    const newProfileInput = {
      id,
      userName,
      userBio,
      userPicture,
    };

    setNewProfile([...newProfile, newProfileInput]);

    form.reset();
  }

  useEffect(() => {
    localStorage.setItem("profileResult", JSON.stringify(newProfile));
  }, [newProfile]);

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
