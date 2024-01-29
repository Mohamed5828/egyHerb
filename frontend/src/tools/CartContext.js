import React, { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
// import cartReducer from "./CartReducer";
const CartContext = createContext();
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.some((item) => item.id === action.payload.id)) {
        return state;
      } else {
        return [...state, action.payload];
      }
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload.productId);
    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.productId
          ? {
              ...item,
              cartQuantity: item.cartQuantity + action.payload.cartQuantity,
            }
          : item
      );
    case "SET_CART_ITEMS":
      return action.payload;
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    // Fetch initial cart items from the backend when the component mounts
    const fetchInitialCartItems = async () => {
      try {
        // const response = await axios.get("/api/cart");
        let response = [
          {
            image:
              "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cen/cen28026/u/8.jpg",
            title: "21st Century, Zinc Citrate, 50 mg, 60 Tablets",
            weight: 0.07,
            quantity: "Package Quantity: 60 Count",
            price: 2,
            priceEgypt: 20.01,
            cartQuantity: 1,
            id: 1,
          },
          {
            image:
              "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cen/cen22263/u/27.jpg",
            title: "21st Century, Calcium Magnesium Zinc + D3, 90 Tablets",
            weight: 0.16,
            quantity: "Package Quantity: 90 Count",
            price: 4.07,
            priceEgypt: 40.72,
            cartQuantity: 1,
            id: 2,
          },
          {
            image:
              "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cen/cen22713/u/45.jpg",
            title: "21st Century, Magnesium, 250 mg, 110 Tablets",
            weight: 0.12,
            quantity: "Package Quantity: 110 Count",
            price: 2.67,
            priceEgypt: 26.72,
            cartQuantity: 1,
            id: 3,
          },
          {
            image:
              "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cen/cen27757/u/37.jpg",
            title: "21st Century, Biotin, 10,000 mcg, 120 Tablets",
            weight: 0.07,
            quantity: "Package Quantity: 120 Count",
            price: 8.01,
            priceEgypt: 80.11,
            id: 4,
            cartQuantity: 1,
          },
        ];
        // Use the dispatch function to update the state with fetched cart items
        // dispatch({ type: "SET_CART_ITEMS", payload: response.data });
        dispatch({ type: "SET_CART_ITEMS", payload: response });
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchInitialCartItems();
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
