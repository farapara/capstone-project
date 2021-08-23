import "./ProfileCard.css";

export default function ProfileCard() {
  const newProfileInput =
    JSON.parse(localStorage.getItem("newProfileInput")) || [];

  function capitalizeName(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <section className="ProfileCard">
      <div className="ProfilePictureWrapper">
        <image
          className="ProfilePicture"
          src={newProfileInput.userPicture}
          alt=""
        />
      </div>
      <h2 className="ProfileHeading">
        Welcome {capitalizeName(newProfileInput.userName)}{" "}
      </h2>

      <div className="ProfileCardInput">
        <p>{newProfileInput.userBio}</p>
      </div>

      <div>
        <h4>start your journey!</h4>
      </div>
    </section>
  );
}
