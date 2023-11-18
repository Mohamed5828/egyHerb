import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styling/css/components/postSubmitted.css";
import SignUpForm from "./SignUpForm";
import GoogleAuth from "./GoogleAuth";

function NotFound() {
  const [token, setToken] = useState();
  return (
    <div className="write-container">
      <div className="post-submitted-card">
        <SignUpForm />
        <GoogleAuth token={setToken} />
      </div>
      {token}
    </div>
  );
}

export default NotFound;
