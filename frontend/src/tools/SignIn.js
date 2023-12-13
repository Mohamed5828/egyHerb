// SignIn.js
import axios from "axios";
import { useSignIn as useSignInKit } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const getToken = async (username, password) => {
  const postData = {
    email: username,
    password: password,
  };

  try {
    const response = await axios.post(
      "http://localhost:8080/api/v1/auth/authenticate",
      postData
    );

    return response.data.token;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

const authenticateUser = async (token, username) => {
  return {
    token: token,
    expiresIn: 3600,
    tokenType: "Bearer",
    authState: { email: username },
  };
};

const useSignIn = () => {
  const navigate = useNavigate();
  const signInKit = useSignInKit();

  const signInAndRedirect = async (username, password) => {
    try {
      const token = await getToken(username, password);
      const authData = await authenticateUser(token, username);
      signInKit(authData);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error:", error);
      // Handle the error, e.g., display an error message
    }
  };

  return signInAndRedirect;
};

export default useSignIn;
