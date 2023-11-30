const { postProduct } = require("./helperFunctions");
const dbServer = "http://localhost:8080/products";

let x = [
  {
    firstImage:
      "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cen/cen22663/u/22.jpg",
    popularity: 0,
    title: "21st Century, Gelatin, 600 mg, 100 Capsules",
    weight: "0.2 lb",
    quantity: "100 Count",
    priceUs: 4.47,
    dimensions: "9.7 x 6.4 x 4.6 cm, 0.09 kg",
    category_id: 0,
    expiryDate: "June 2026",
  },
  {
    firstImage:
      "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cen/cen27116/u/65.jpg",
    popularity: 0,
    title: "21st Century, Biotin, 5,000 mcg, 110 Capsules",
    weight: "0.25 lb",
    quantity: "110 Count",
    priceUs: 6.21,
    dimensions: "9.7 x 6.4 x 4.6 cm, 0.11 kg",
    category_id: 0,
    expiryDate: "August 2025",
  },
  {
    firstImage:
      "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cen/cen22556/u/54.jpg",
    popularity: 0,
    title: "21st Century, Digestive Enzymes, 60 Capsules",
    weight: "0.13 lb",
    quantity: "60 Count",
    priceUs: 6.21,
    dimensions: "9.4 x 6.4 x 4.6 cm, 0.06 kg",
    category_id: 0,
    expiryDate: "February 2026",
  },
  {
    firstImage:
      "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cen/cen22790/u/26.jpg",
    popularity: 0,
    title:
      "21st Century, Herbal Slimming Tea, Green Tea, 24 Tea Bags, 1.7 oz (48 g)",
    weight: "0.19 lb",
    quantity: "24 Count",
    priceUs: 4.0,
    dimensions: "12.7 x 6.6 x 5.3 cm, 0.07 kg",
    category_id: 0,
    expiryDate: "August 2025",
  },
  {
    firstImage:
      "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cen/cen27383/u/73.jpg",
    popularity: 0,
    title:
      "21st Century, Cinnamon Plus Chromium, 500 mg, 120 Vegetarian Capsules",
    weight: "0.3 lb",
    quantity: "120 Count",
    priceUs: 7.13,
    dimensions: "4.6 x 6.1 x 14.5 cm, 0.14 kg",
    category_id: 0,
    expiryDate: "June 2026",
  },
  {
    firstImage:
      "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cen/cen27542/u/31.jpg",
    popularity: 0,
    title:
      "21st Century, Sentry Senior, Multivitamin &amp; Multimineral Supplement, Women 50+, 100 Tablets",
    weight: "0.52 lb",
    quantity: "100 Count",
    priceUs: 7.1,
    dimensions: "13 x 6.6 x 6.6 cm, 0.24 kg",
    category_id: 0,
    expiryDate: "April 2026",
  },
  {
    firstImage:
      "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cen/cen27529/u/13.jpg",
    popularity: 0,
    title: "21st Century, Selenium, 200 mcg, 60 Capsules",
    weight: "0.15 lb",
    quantity: "60 Count",
    priceUs: 4.47,
    dimensions: "9.4 x 6.4 x 4.6 cm, 0.07 kg",
    category_id: 0,
    expiryDate: "January 2026",
  },
];

async function postProducts() {
  for (const product of x) {
    await postProduct(product, dbServer);
  }
}
postProducts();
// console.log(x);
