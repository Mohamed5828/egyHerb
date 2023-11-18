import React, { useState } from "react";
import "../Styling/css/components/postSubmitted.css";

function RegInfo() {
  const [formData, setFormData] = useState({
    mobile: "",
    address: "",
    city: "",
    area: "",
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
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-container">
          <input
            className="form-input"
            type="tel"
            placeholder="Mobile Number"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            required
          />
          <input
            className="form-input"
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />{" "}
          <select
            className="form-input"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Select City
            </option>
            <option value="city1">City 1</option>
            <option value="city2">City 2</option>
            {/* Add more cities as needed */}
          </select>{" "}
          <input
            className="form-input"
            type="text"
            name="area"
            placeholder="Area"
            value={formData.area}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegInfo;
