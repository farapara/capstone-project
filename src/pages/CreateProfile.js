import { useState } from "react";
import "./CreateProfile.css";
import Register from "../components/Register";
import Login from "../components/Login";

export default function CreateProfile() {
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <section>
      <h3>
        Toys are Taking Vacations and Seeing the World (Without Their Owners) -
        just for stuffies.
      </h3>
      {currentUser ? (
        <button className="LogoutButton">Log out</button>
      ) : (
        <div className="SigninButtons">
          <button className="LoginButton">Login</button>
          <button className="RegisterButton">Register</button>
        </div>
      )}
      <Login />
      <Register />
    </section>
  );
}
