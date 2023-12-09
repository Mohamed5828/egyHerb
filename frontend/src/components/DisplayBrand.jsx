import React from "react";

import herbData from "../tools/data.json";
import { Link } from "react-router-dom";

function DisplayBrand() {
  return (
    <div>
      <div className="cards-container">
        {herbData.map((prod) => {
          return (
            <div className="col-11-xs col-5-sm col-4-xl">
              <Link to={``}>
                <div className="cards">
                  <div className="card-info">
                    <button className="cart-btn">Add to cart</button>
                  </div>
                  <div className="img-container">
                    <img className="card-img" src={prod.image} />
                  </div>

                  <h1 className="card-title">{prod.title}</h1>
                  <h1 className="card-price">{prod.priceEgypt} L.E</h1>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayBrand;
