import React from "react";
import { useIsAuthenticated } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

function SigninBtn() {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Handle button click based on authentication status
    console.log("isAuthenticated:", isAuthenticated());

    if (isAuthenticated()) {
      // User is authenticated, perform logout or other actions
      navigate("/profile");
    } else {
      // User is not authenticated, perform login or other actions
      navigate("/login");
    }
  };
  return (
    <div onClick={handleButtonClick}>
      <svg
        focusable="false"
        viewBox="2 2 24 24"
        aria-hidden="true"
        className="sign-in-svg"
      >
        <path d="M14 4.5a9.5 9.5 0 109.5 9.5A9.51 9.51 0 0014 4.5zM9.26 21.05v-2.17a3.37 3.37 0 013.36-3.36h2.74a3.37 3.37 0 013.36 3.36v2.19a8.47 8.47 0 01-9.48 0zM14 14.5a2.5 2.5 0 112.5-2.5 2.5 2.5 0 01-2.5 2.5zm5.73 5.76v-1.38a4.37 4.37 0 00-3.44-4.26A3.45 3.45 0 0017.5 12a3.5 3.5 0 00-7 0 3.45 3.45 0 001.21 2.62 4.37 4.37 0 00-3.44 4.26v1.38a8.5 8.5 0 1111.46 0z"></path>
      </svg>
      <div>
        <span>{isAuthenticated() ? "Profile" : "Login"}</span>
      </div>
    </div>
  );
}

export default SigninBtn;
