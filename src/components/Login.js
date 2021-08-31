import "./Login.css";
import { RiBearSmileLine } from "react-icons/ri";
import { useState, useRef } from "react";

export default function Login() {
  const [error, setError] = useState(false);
  const nameRef = useRef();
  const passwordRef = useRef();

  function handleSubmitLogin(event) {
    event.preventDefault();

    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;

    const newProfileInput = {
      username,
      password,
    };

    localStorage.setItem("newProfileInput", JSON.stringify(newProfileInput));

    form.reset();
  }

  return (
    <div className="Login">
      <div className="Logo">
        <RiBearSmileLine style={{ color: "#e8abb9" }} />
        Going Places App
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

        {error && <span className="Wrong">Something went wrong!</span>}
      </form>
    </div>
  );
}
