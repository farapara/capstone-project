import { useState } from "react";
import "./CreateProfile.css";
import Register from "../components/Register";
import Login from "../components/Login";

export default function CreateProfile() {
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useState("");
  const [showRegister, setShowRegister] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

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
          <button className="LoginButton" onClick={() => setShowLogin(true)}>
            Login
          </button>
          <button
            className="RegisterButton"
            onClick={() => setShowRegister(true)}
          >
            Register
          </button>
        </div>
      )}
      {showRegister && <Register setShowRegister={setShowRegister} />}
      {showLogin && <Login setShowLogin={setShowLogin} />}
    </section>
  );
}
