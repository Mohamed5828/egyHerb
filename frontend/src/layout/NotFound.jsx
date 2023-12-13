import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styling/css/components/postSubmitted.css";
import SignUpForm from "./SignUpForm";
import GoogleAuth from "../components/GoogleAuth";

function NotFound() {
  return (
    <div className="write-container">
      <div className="post-submitted-card">
        <SignUpForm />
        <GoogleAuth />
      </div>
    </div>
  );
}

export default NotFound;
