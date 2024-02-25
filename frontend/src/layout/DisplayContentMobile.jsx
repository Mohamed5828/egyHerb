import React from "react";
import herbData from "../tools/data.json";
import { Link } from "react-router-dom";
import { useCart } from "../tools/CartContext";
import { handleAddToCart } from "../tools/CartHandlers";
import { useDataFetching } from "../tools/DataFetching";

function DisplayContentMobile({ queryURL }) {
  const { dispatch } = useCart();
  const { data, loading, error } = useDataFetching(queryURL);
  return (
    <div className={!loading ? "loader" : ""}>
      {herbData &&
        herbData.map((prod) => (
          <Link to={`product`}>
            <div className="m-product-card" key={prod.id}>
              <div className="m-img-container">
                <img className="m-card-img" src={prod.image} alt={prod.title} />
              </div>
              <div className="m-card-details">
                <h1 className="m-card-title">{prod.title}</h1>
                <h1 className="m-card-price">{prod.priceEgypt} L.E</h1>
              </div>
              {/* </Link> */}
              <button
                className="m-cart-btn"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleAddToCart(dispatch, prod);
                }}
              >
                <svg
                  focusable="false"
                  viewBox="2 2 24 24"
                  aria-hidden="true"
                  className="cart-svg"
                >
                  <path d="M21 15.54a.51.51 0 00.49-.38l2-8a.51.51 0 00-.1-.43.49.49 0 00-.39-.19H8.28L8 4.9a.51.51 0 00-.49-.4H5a.5.5 0 000 1h2.05L9 15l-2.36 4.74a.53.53 0 000 .49.5.5 0 00.42.23H21a.5.5 0 00.5-.5.5.5 0 00-.5-.5H7.89l1.92-3.92zm1.34-8l-1.73 7H9.92l-1.43-7zM10 21a1 1 0 101 1 1 1 0 00-1-1zM18 21a1 1 0 101 1 1 1 0 00-1-1z"></path>
                </svg>
              </button>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default DisplayContentMobile;
