const handleRegister = async () => {
  try {
    const response = await fetch("your-backend-registration-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.error === "EmailAlreadyExists") {
        // Display an error message to the user
        setError("The email address is already in use.");
      } else {
        // Handle other errors if needed
        setError("An error occurred during registration.");
      }
      return;
    }

    // Continue with successful registration logic
  } catch (error) {
    console.error("Error during registration:", error);
    setError("An unexpected error occurred.");
  }
};
export default handleRegister;
