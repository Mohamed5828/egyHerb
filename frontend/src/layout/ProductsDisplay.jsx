import React from "react";
import herbData from "../tools/data.json";
import { Link } from "react-router-dom";

import "../Styling/css/components/home.css";
import "../Styling/css/components/card.css";
import "../Styling/css/components/btn.css";
import "../Styling/css/components/loader.css";
import { useCart } from "../tools/CartContext";
import { handleAddToCart } from "../tools/CartHandlers";

function ProductsDisplay() {
  const { dispatch } = useCart();

  return (
    <div>
      <div className="cards-container">
        <div className="card-header"></div>
        {herbData.map((prod) => {
          return (
            <div className="col-11-xs col-5-sm col-4-xl">
              <Link to={`product`}>
                <div className="cards">
                  <div className="card-info">
                    <button
                      className="cart-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleAddToCart(dispatch, prod);
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                  <div className="img-container">
                    <img className="card-img" src={prod.image} />
                  </div>
                  <div className="card-desc">
                    <h1 className="card-title">{prod.title}</h1>
                    <h1 className="card-price">{prod.priceEgypt} L.E</h1>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsDisplay;
