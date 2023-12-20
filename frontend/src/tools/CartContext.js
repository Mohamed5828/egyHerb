import React, { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
// import cartReducer from "./CartReducer";
const CartContext = createContext();
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload.productId);
    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.productId
          ? { ...item, quantity: item.quantity + action.payload.quantity }
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
            id: 1,
            name: "Throwback Hip Bag",
            href: "#",
            color: "Salmon",
            price: 90.0,
            quantity: 1,
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
            imageAlt:
              "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
          },
          {
            id: 2,
            name: "Medium Stuff Satchel",
            href: "#",
            color: "Blue",
            price: 32.0,
            quantity: 1,
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
            imageAlt:
              "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
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
