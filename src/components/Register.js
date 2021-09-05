import "./Register.css";
import { RiBearSmileLine, RiCloseCircleFill } from "react-icons/ri";
import { useState, useRef } from "react";
import axios from "axios";

export default function Register({ setShowRegister }) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    const newUser = {
      username: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      await axios.post("/users/register", newUser);
      setError(false);
      setSuccess(true);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="Register">
      <div className="Logo">
        <RiBearSmileLine style={{ color: "#e8abb9" }} />
        Going Places
      </div>
      <form autocomplete="off" onSubmit={handleSubmitRegister}>
        <input type="text" placeholder="username" ref={nameRef} />
        <input type="email" placeholder="email" ref={emailRef} />
        <input type="password" placeholder="password" ref={passwordRef} />
        <button className="RegisterBtn">Register</button>
        <div>
          {success && (
            <span className="Success">Successfull. You can login now!</span>
          )}
          <br />
       
         {error && <span className="Wrong">Something went wrong!</span>}
        </div>
      </form>
      <RiCloseCircleFill
        className="RegisterCancel"
        onClick={() => setShowRegister(false)}
      />
    </div>
  );
}
