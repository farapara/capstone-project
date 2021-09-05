import "./Login.css";
import { RiBearSmileLine, RiCloseCircleFill } from "react-icons/ri";
import { useState, useRef } from "react";
import axios from "axios";

export default function Login({ setShowLogin, setCurrent }) {
  // eslint-disable-next-line
  const [error, setError] = useState(false);
  const nameRef = useRef();
  const passwordRef = useRef();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const user = {
      username: nameRef.current.value,

      password: passwordRef.current.value,
    };
    try {
      await axios.post("/users/login", user);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="Login">
      <div className="Logo">
        <RiBearSmileLine style={{ color: "#e8abb9" }} />
        Going Places
      </div>
      <form onSubmit={handleSubmitLogin}>
        <input
          name="username"
          type="text"
          placeholder="username"
          ref={nameRef}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          ref={passwordRef}
        />
        <button className="LoginBtn">Login</button>
        <br />

    
      </form>
      <RiCloseCircleFill
        className="LoginCancel"
        onClick={() => setShowLogin(false)}
      />
    </div>
  );
}
