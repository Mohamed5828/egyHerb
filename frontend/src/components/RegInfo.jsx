import React, { useState } from "react";
import "../Styling/css/components/postSubmitted.css";

function RegInfo() {
  const [formData, setFormData] = useState({
    mobile: "",
    address: "",
    city: "",
    area: "",
  });
  let cities = [
    "CAIRO",
    "ALEXANDRIA",
    "GIZA",
    "LUXOR",
    "ASWAN",
    "SHARM_EL_SHEIKH",
    "HURGHADA",
    "PORT",
    "SUEZ",
    "ISMAILIA",
    "MANSOURA",
    "TANTA",
    "ASSIUT",
    "SOHAG",
    "ZAGAZIG",
    "DAMIETTA",
    "MINYA",
    "BENI",
    "QENA",
    "BANHA",
    " KAFR_EL_SHEIKH",
  ];
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
    <div className="post-submitted-card ">
      <form onSubmit={handleSubmit} className="form-container">
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
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
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
          Continue
        </button>
      </form>
    </div>
  );
}

export default RegInfo;
