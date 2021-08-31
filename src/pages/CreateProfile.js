import { useState } from "react";
import "./CreateProfile.css";
import Register from "../components/Register";

export default function CreateProfile() {
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <section>
      <h2 className="Heading">the one with the map</h2>

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
      <Register />
    </section>
  );
}
