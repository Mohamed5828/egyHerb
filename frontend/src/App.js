import React from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayContainer from "./components/DisplayContainer";
import SingleProductPage from "./components/SingleProductPage";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import StripeApp from "./components/Stripe";

function App() {
  return (
    <Router>
      <Navbar />
      <Cart />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<DisplayContainer />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/registration" element={<NotFound />} />
        {/* <Route path="/payment" element={<StripeApp />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
