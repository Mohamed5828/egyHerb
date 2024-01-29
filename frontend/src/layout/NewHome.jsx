import React from "react";
import "../Styling/css/components/newHome.css";
import { Link } from "react-router-dom";
const data = [
  {
    image:
      "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cen/cen22663/u/22.jpg",
    popularity: 0,
    title: "21st Century, Gelatin, 600 mg, 100 Capsules",
    weight: "0.2 lb",
    quantity: "100 Count",
    price_us: "$4.47",
    dimensions: "9.7 x 6.4 x 4.6 cm, 0.09 kg",
    expiry_date: "June 2026",
  },
  {
    image:
      "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cen/cen27116/u/65.jpg",
    popularity: 0,
    title: "21st Century, Biotin, 5,000 mcg, 110 Capsules",
    weight: "0.25 lb",
    quantity: "110 Count",
    price_us: "$6.21",
    dimensions: "9.7 x 6.4 x 4.6 cm, 0.11 kg",
    expiry_date: "August 2025",
  },
  {
    image:
      "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cen/cen22556/u/54.jpg",
    popularity: 0,
    title: "21st Century, Digestive Enzymes, 60 Capsules",
    weight: "0.13 lb",
    quantity: "60 Count",
    price_us: "$6.21",
    dimensions: "9.4 x 6.4 x 4.6 cm, 0.06 kg",
    expiry_date: "February 2026",
  },
  {
    image:
      "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cen/cen22790/u/26.jpg",
    popularity: 0,
    title:
      "21st Century, Herbal Slimming Tea, Green Tea, 24 Tea Bags, 1.7 oz (48 g)",
    weight: "0.19 lb",
    quantity: "24 Count",
    price_us: "$4.00",
    dimensions: "12.7 x 6.6 x 5.3 cm, 0.07 kg",
    expiry_date: "August 2025",
  },
  {
    image:
      "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cen/cen27383/u/73.jpg",
    popularity: 0,
    title:
      "21st Century, Cinnamon Plus Chromium, 500 mg, 120 Vegetarian Capsules",
    weight: "0.3 lb",
    quantity: "120 Count",
    price_us: "$7.13",
    dimensions: "4.6 x 6.1 x 14.5 cm, 0.14 kg",
    expiry_date: "June 2026",
  },
];
const cards = [
  {
    title: "Cultivating Wellness, Satisfying Souls",
    content:
      "Egyherb, your premier online marketplace for acquiring genuine, high-quality herbs. Our commitment is to prioritize customer satisfaction above all, ensuring your herbal experience is nothing short of exceptional.",
  },
  {
    title: "Herb Excellence for Well-Being",
    content:
      "Elevate your well-being with Egyherb, where nature's treasures meet your journey to health. Immerse yourself in the richness of authentic, premium herbs, carefully curated for your optimal wellness.",
  },
  {
    title: "Peace of mind",
    content:
      "Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.",
  },
];
function NewHome() {
  return (
    <div>
      <div className="home-container">
        <div className="popular-header-container">
          <h2>Popular Products right now</h2>
        </div>
        <div className="popular-container row gap-5">
          {data.map((product) => (
            <div className="popular-product-card col-5-xs col-3-sm col-3-md col-2-xl">
              <div className="popular-product-img">
                <img src={product.image} />
              </div>
              <div className="popular-product-info">
                <h2 className="popular-product-title">{product.title}</h2>
                <h3 className="popular-product-price">{product.price_us}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="home-image">
          <h2 className="image-text"></h2>
          <div className="banner-image-div">
            <img
              className="banner-image"
              src={
                "https://firebasestorage.googleapis.com/v0/b/blogimgupload-3998a.appspot.com/o/Untitled-2.png?alt=media&token=9cd93b7c-f5c1-4224-b196-af82d661e2d5"
              }
            />
          </div>
        </div>
      </div>
      <div className="banner">
        <h2 className="banner-header">What is EgyHerb</h2>
        <div className="banner-cards">
          {cards.map((card) => {
            return (
              <div className="banner-single-card">
                <div className="banner-card-title">{card.title}</div>
                <div className="banner-card-content">{card.content}</div>
              </div>
            );
          })}
        </div>
        <div className="banner-question">
          <h2>Have a question? Well, we’ve got some answers.</h2>
          <Link className="contact-btn" to={"/inquiry"}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewHome;
