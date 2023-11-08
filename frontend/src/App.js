import React from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayContainer from "./components/DisplayContainer";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <Navbar />
      <Cart />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<DisplayContainer />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
