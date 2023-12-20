// LoginPage.js
import React, { useState } from "react";
import useSignIn from "../tools/SignIn"; // Import the custom hook
import "./../Styling/css/components/login.css";

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

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
