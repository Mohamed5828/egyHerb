import React, { useEffect } from "react";

function GoogleAuth(token) {
  function handleCallbackResponse(response) {
    console.log("Encoded jwt ID token : " + response.credential);
    token = response.credential;
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "736728232259-93dntg1imd18ai6l9fvh0f006cfs394c.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();
  }, []);
  return (
    <div>
      <div id="signInDiv"></div>
    </div>
  );
}

export default GoogleAuth;
