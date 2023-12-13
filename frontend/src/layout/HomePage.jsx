import React, { useState, useEffect } from "react";
import "../Styling/css/components/home.css";
import "../Styling/css/components/card.css";
import "../Styling/css/components/btn.css";
import "../Styling/css/components/loader.css";
import { Link } from "react-router-dom";
import URL from "../tools/config";
// import Loading from "./Loading";
import { useDataFetching } from "../tools/DataFetching";
import herbData from "../tools/data.json";
import PlayerComponent from "../components/Video";
import ProductsDisplay from "./ProductsDisplay";
import ProductsDisplayMobile from "./ProductsDisplayMobile";

const HomePage = () => {
  const isMobile = window.innerWidth <= 599;

  // const { data, loading, error } = useDataFetching(URL + `/posts/post`);
  // const { data, loading, error } = useDataFetching(da);
  // if (loading) {
  //   return <div>{/* <Loading show={loading} /> */}</div>;
  // } else {
  return (
    <div>
      <div className="home-container">
        <PlayerComponent />
        <h1 className="header">Featured </h1>
        {isMobile ? <ProductsDisplayMobile /> : <ProductsDisplay />}
        <h1 className="header">Latest </h1>
        <div className="row gap-2">
          <div className="footer">
            <h3>Footer | </h3>
            <div className="socials"></div>
          </div>
        </div>
      </div>
    </div>
  );
  // }
};
export default HomePage;

// const mysql = require('mysql2/promise');

// // Create a connection to the database
// const connection = await mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'mydatabase'
// });

// // Define the table schema
// const createTableQuery = `CREATE TABLE IF NOT EXISTS products (
//   id INT NOT NULL AUTO_INCREMENT,
//   image VARCHAR(255) NOT NULL,
//   title VARCHAR(255) NOT NULL,
//   weight FLOAT NOT NULL,
//   quantity VARCHAR(255) NOT NULL,
//   price FLOAT NOT NULL,
//   priceEgypt FLOAT NOT NULL,
//   PRIMARY KEY (id)
// )`;

// // Execute the table creation query
// await connection.execute(createTableQuery);

// // Define the data to be inserted
// const products = [
//   {
//     image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cen/cen28026/u/8.jpg',
//     title: '21st Century, Zinc Citrate, 50 mg, 60 Tablets',
//     weight: 0.07,
//     quantity: 'Package Quantity: 60 Count',
//     price: 2,
//     priceEgypt: 20.01
//   },
//   {
//     image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cen/cen22263/u/27.jpg',
//     title: '21st Century, Calcium Magnesium Zinc + D3, 90 Tablets',
//     weight: 0.16,
//     quantity: 'Package Quantity: 90 Count',
//     price: 4.07,
//     priceEgypt: 40.72
//   },
//   {
//     image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cen/cen22713/u/45.jpg',
//     title: '21st Century, Magnesium, 250 mg, 110 Tablets',
//     weight: 0.12,
//     quantity: 'Package Quantity: 110 Count',
//     price: 2.67,
//     priceEgypt: 26.72
//   }
// ];

// // Define the query to insert the data
// const insertQuery = `INSERT INTO products (image, title, weight, quantity, price, priceEgypt) VALUES ?`;

// // Map the products array to an array of value arrays to be passed to the query
// const values = products.map(product => [
//   product.image,
//   product.title,
//   product.weight,
//   product.quantity,
//   product.price,
//   product.priceEgypt
// ]);

// // Execute the insert query with the values array
// await connection.execute(insertQuery, [values]);
