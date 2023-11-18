import React, { useState, useEffect } from "react";
import "../Styling/css/components/blogPost.css";
import "../Styling/css/components/card.css";
import "../Styling/css/components/btn.css";
import "../Styling/css/components/loader.css";
import { Link } from "react-router-dom";

let jsonProduct = {
  id: 1,
  name: "Throwback Hip Bag",
  href: "#",
  color: "Salmon",
  price: "$90.00",
  quantity: 1,
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
  imageAlt:
    "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
};

export default function Product() {
  return (
    <div>
      <div className="home-container">
        <div className="all-img-container">
          <div className="alt-img-container">
            <ul className="image-ul">
              <li className="small-img-container">
                <img className="small-img" src={jsonProduct.imageSrc} />
              </li>
              <li className="small-img-container active">
                <img className="small-img" src={jsonProduct.imageSrc} />
              </li>
            </ul>
          </div>
          <div className="normal-img-container">
            <img src={jsonProduct.imageSrc} />
          </div>
          <div className="title">
            <h2>{jsonProduct.name}</h2>
            <a href="#">
              <h3 className="brand">{jsonProduct.color}</h3>
            </a>
          </div>
          <div className="checkout">
            <div className="price">Price: {jsonProduct.price}</div>
            <button className="cart-btn">add to cart</button>
          </div>
        </div>
        <div className="product-overview">
          <div className="description">{jsonProduct.color}</div>
          <div className="warning">
            Consult a healthcare provider prior to use if pregnant, nursing, on
            medications, have a medical condition or are planning a medical
            procedure. Stop use and contact a physician if adverse reactions
            occur. Keep out of reach of children. Do not use if product appears
            to be tampered with or seal is broken. Store at room temperature.
          </div>
          <div className="suggested-use">{jsonProduct.color}</div>
          <div className="other-ingredients">{jsonProduct.color}</div>
        </div>
      </div>
    </div>
  );
}
