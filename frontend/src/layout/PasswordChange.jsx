import React from 'react'

function PasswordChange() {
// LoginPage.js
import React, { useState } from "react";
import useSignIn from "../tools/SignIn"; // Import the custom hook
import "./../Styling/css/components/login.css";
import { Link } from "react-router-dom";

function LoginPage() {
  const signIn = useSignIn(); // Use the custom hook
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signIn(username, password);
  };

  return (
    <div className="login-container">
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <Link className="register-btn" to="/registration">
        New User
      </Link>
    </div>
  );
}

export default LoginPage;

export default PasswordChange
