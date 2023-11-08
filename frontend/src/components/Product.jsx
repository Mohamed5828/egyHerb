import React, { useState, useEffect } from "react";
import "../Styling/css/components/home.css";
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
        <img src={jsonProduct.imageSrc} />
      </div>
    </div>
  );
}
