import React, { useState, useEffect } from "react";
import "../Styling/css/components/blogPost.css";
import "../Styling/css/components/card.css";
import "../Styling/css/components/btn.css";
import "../Styling/css/components/loader.css";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";

let jsonProduct = {
  title: "21st Century, Calcium Magnesium Zinc + D3, 90 Tablets",
  image:
    "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cen/cen22663/u/22.jpg",
  popularity: 0,
  weight: "0.2 lb",
  quantity: "100 Count",
  price_us: "$4.47",
  dimensions: "9.7 x 6.4 x 4.6 cm, 0.09 kg",
  expiry_date: "June 2026",
  secondImage:
    "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cen/cen22263/r/33.jpg",

  description:
    "<ul><li>The Important Trio of Minerals + Vitamin D3 for Bone Health Support</li><li>Mineral Supplement</li><li>Gluten Free</li><li>Guaranteed Quality Laboratory Tested</li></ul><p>Calcium, Magnesium and Zinc, an important mineral trio plus D3, supports bones, muscles and the immune system.</p>",

  suggestedUseData:
    "As a mineral supplement, adults take three (3) tablets daily with any meal or as directed by a healthcare provider. Do not exceed recommended dosage. Individual results may vary.",

  otherIngredData:
    "<p>Cellulose, croscarmellose sodium, maltodextrin. Contains &lt;2% of: BHA, BHT, gelatin, magnesium silicate, magnesium stearate, peg, polyvinyl alcohol, silicon dioxide, starch, stearic acid, sucrose, talc, &nbsp;vegetable oil, water.</p><p>No added yeast, or artificial flavors.</p>",

  categories: [
    "Minerals",
    "Calcium",
    "Calcium & Magnesium",
    "Bone, Joint & Cartilage",
    "Supplements",
  ],
  categories_description: [
    "#1 in Minerals",
    "#1 in Calcium",
    "#1 in Calcium & Magnesium",
    "#2 in Bone, Joint & Cartilage",
    "#10 in Supplements",
  ],
};
const sanitizedDescription = DOMPurify.sanitize(jsonProduct.description);
const sanitizedOtherIngredients = DOMPurify.sanitize(
  jsonProduct.otherIngredData
);

export default function SingleProductPage() {
  return (
    <div>
      <div className="home-container padding-top-zero">
        <div className="all-img-container">
          <div className="alt-img-container">
            <ul className="image-ul">
              <li className="small-img-container">
                <img className="small-img" src={jsonProduct.secondImage} />
              </li>
              <li className="small-img-container active">
                <img className="small-img" src={jsonProduct.image} />
              </li>
            </ul>
          </div>
          <div className="normal-img-container">
            <img src={jsonProduct.image} />
          </div>
          <div className="title">
            <div className="border-element">
              <h2>{jsonProduct.title}</h2>
              <a href="#" className="brand">
                <span>{jsonProduct.weight}</span>
              </a>
            </div>
            <div className="border-element">
              <ul className="lite-info-ul">
                <li className="lite-info-li">
                  Best By: {jsonProduct.expiry_date}
                </li>
                <li className="lite-info-li">
                  Package Quantity: {jsonProduct.quantity}
                </li>
                <li className="lite-info-li">
                  Shipping Weight: {jsonProduct.weight}
                </li>
                <li className="lite-info-li">
                  Dimensions: {jsonProduct.dimensions}
                </li>
              </ul>
            </div>
            <div className="product-category">
              <h2 className="info-title">Product Ranking</h2>
              <ul>
                {jsonProduct.categories_description.map((x) => (
                  <li>{x}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="checkout">
            <div className="price">Price: {jsonProduct.price_us}</div>
            <button className="cart-btn">add to cart</button>
          </div>
        </div>
        <div className="product-overview">
          <div className="overview-title">
            <h2>Product Overview</h2>
          </div>
          <div className="overview-info">
            <div className="item-row">
              <h2 className="info-title">Description</h2>
              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
              />

              <h2 className="info-title">Suggested Use</h2>

              <div className="suggested-use">
                {jsonProduct.suggestedUseData}
              </div>
              <h2 className="info-title">Other Ingredients</h2>

              <div
                className="other-ingredients"
                dangerouslySetInnerHTML={{ __html: sanitizedOtherIngredients }}
              />
              <h2 className="info-title">Warning</h2>
              <div className="warning">
                Consult a healthcare provider prior to use if pregnant, nursing,
                on medications, have a medical condition or are planning a
                medical procedure. Stop use and contact a physician if adverse
                reactions occur. Keep out of reach of children. Do not use if
                product appears to be tampered with or seal is broken. Store at
                room temperature.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
