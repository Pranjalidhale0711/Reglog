import "./LoginPage.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usernameChange = (event) => {
    const { value } = event.target;
    setUsername(value);
  };
  const passwordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
  };
  function submit() {
    axios.post("http://localhost:5030/api/auth/login", {
        email: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <div className="loginpage">
        Login
        <div className="form">
          <label className="form username">Email</label>
          <input
            className="input1"
            placeholder="Enter Email"
            onChange={usernameChange}
            value={username}
          ></input>
          <label className="form username">Password</label>
          <input
            className="input1"
            placeholder="Enter Password"
            onChange={passwordChange}
            value={password}
          ></input>
          <button className="submitbtn" onClick={submit}>
            Login
          </button>
          <div className="createacc">
            <p>
              Not registered Yet? <Link to="/register">Create an Account</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
