import "./AddProfileForm.css";
import uuid from "react-uuid";
import { useState } from "react";

export default function AddProfileForm() {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "vma7udud");
    setLoading(true);

    const res = await fetch(
      " https://api.cloudinary.com/v1_1/dpwb98vu5/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    console.log(file);

    setImage(file.secure_url);
    setLoading(false);
  };
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
          onChange={uploadImage}
          className="userPicture"
          name="userPicture"
          id="userPicture"
          type="file"
          accept="image/png, image/jpeg"
          required
        />
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <img src={image} alt="" style={{ width: "200px" }} />
        )}

        <button type="submit" className="Submit">
          save
        </button>
      </form>
    </div>
  );
}
