// Brands.jsx
import React from "react";
import realData from "./../data.json";
import { Link } from "react-router-dom";
import "./../Styling/css/components/brand.css"; // Import the CSS file

const Brands = () => {
  // Group brands by first letter or "0-9" if it starts with a number

  const groupedBrands = realData.reduce((acc, brand) => {
    const firstChar = brand.name[0].toUpperCase();
    const groupKey = isNaN(firstChar) ? firstChar : "0-9";

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(brand);
    return acc;
  }, {});
  console.log(groupedBrands);
  return (
    <div className="brands-container">
      <h1>Brands Page</h1>

      {Object.keys(groupedBrands).map((key) => (
        <div key={key} className="brand-group">
          <h2 className="letter-header">{key}</h2>
          <ul className="brand-list">
            {groupedBrands[key].map((brand, index) => (
              <li key={index} className="brand-item">
                <Link to={`/brand/${brand.name}`}>{brand.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Brands;
