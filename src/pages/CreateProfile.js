import { useState } from "react";
import "./CreateProfile.css";

export default function CreateProfile() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <section>
      <h2 className="Heading">THE ONE WITH THE MAP</h2>
      <h4 className="AppDescription">
        Toys are Taking Vacations and Seeing the World (Without Their Owners) -
        just for stuffies.
      </h4>
      <h5>
        “almost every person I spoke to knew someone who had taken a toy
        travelling.”
      </h5>
      {currentUser ? (
        <button className="LogoutButton">Log out</button>
      ) : (
        <div className="SigninButtons">
          <button className="LoginButton">Login</button>
          <button className="RegisterButton">Register</button>
        </div>
      )}
    </section>
  );
}
