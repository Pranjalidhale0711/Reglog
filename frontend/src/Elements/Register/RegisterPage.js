import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterPage.css";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  function handleregister() {
    axios
      .post("http://localhost:5030/api/auth/register", {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      })
      .then((res) => {
        console.log(res);
        window.location.href = "/login";
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const gmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };
  const passwordChange = (event) => {
    const { value } = event.target;
   setPassword(value);
  };
  const confirmpasswordChange = (event) => {
    const { value } = event.target;
   setConfirmPassword(value);
  };
  return (
    <>
      <div className="regpage">
        <div className="regdetails">
          <div className="titlereg">Register</div>
          <label className="labels">Gamil</label>
          <input
            placeholder="Enter Gmail"
            className="inputs"
            onChange={gmailChange}
            value={email}
          ></input>
          <label className="labels">Password</label>
          <input placeholder="Enter Password" className="inputs"  onChange={passwordChange}
          value={password} ></input>
          <label className="labels">Confirm Password</label>
          <input
            placeholder="Enter Confirm Password"
            className="inputs"
          onChange={confirmpasswordChange}
          value={confirmPassword}
          ></input>
          <button className="submitbtn" onClick={handleregister}>
            Submit
          </button>
          <p>
            Already Have account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
