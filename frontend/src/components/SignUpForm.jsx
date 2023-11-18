import React, { useState } from "react";
import "../Styling/css/components/postSubmitted.css";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordRe: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-container">
        <input
          className="form-input"
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
        <input
          className="form-input"
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <input
          className={
            formData.password != formData.passwordRe &&
            formData.passwordRe != ""
              ? "form-input password-warning"
              : "form-input"
          }
          type="password"
          name="password"
          placeholder="Rewirte Password"
          value={formData.passwordRe}
          onChange={handleInputChange}
          required
        />{" "}
        <p className="agreement">
          By creating an account, you agree to Egherb's <i>Conditions of Use</i>{" "}
          and <i>Privacy Notice</i>.
        </p>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
