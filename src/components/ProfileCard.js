import "./ProfileCard.css";
export default function ProfileCard() {
  const createdProfiles =
    JSON.parse(localStorage.getItem("profileResult")) || [];

  function renderProfiles() {
    return createdProfiles.map((createdProfile) => {
      const id = createdProfile.id;

      function capitalizeName(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
      return (
        <section key={id} className="CreatedProfile">
          <div className="ProfilePictureWrapper">
            <image
              className="ProfilePicture"
              src={createdProfile.userPicture}
              alt=""
            />
          </div>
          <h2 className="ProfileHeading">
            Welcome {capitalizeName(createdProfile.userName)}{" "}
          </h2>

          <div className="ProfileCardInput">
            <p>{createdProfile.userBio}</p>
          </div>

          <div>
            <h4 className="Htag">start your journey!</h4>
          </div>
        </section>
      );
    });
  }
  return <div>{renderProfiles()}</div>;
}
