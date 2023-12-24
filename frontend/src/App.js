import React from "react";
import HomePage from "./layout/HomePage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "react-auth-kit";
import DisplayContainer from "./layout/DisplayContainer";
import SingleProductPage from "./layout/SingleProductPage";
import Cart from "./components/Cart";
import NotFound from "./layout/NotFound";
import StripeApp from "./components/Stripe";
import LoginPage from "./components/LoginPage";
import { CartProvider } from "./tools/CartContext";
import Brands from "./layout/Brands";
import NewHome from "./layout/NewHome";
import InquiryForm from "./layout/Inquiry";

function App() {
  const [isCartOpen, setIsCartOpen] = React.useState(true);

  function toggleCart() {
    return setIsCartOpen(!isCartOpen);
  }
  return (
    <AuthProvider
      authType={"cookie"}
      authName={"_auth"}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      <CartProvider>
        <Router>
          {/* <Navbar isCartOpen={isCartOpen} toggleCart={toggleCart} /> */}
          <Cart isCartOpen={isCartOpen} toggleCart={toggleCart} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<DisplayContainer />} />
            <Route path="/product/:id" element={<SingleProductPage />} />
            <Route path="/registration" element={<NotFound />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/newHome" element={<NewHome />} />
            <Route path="/inquiry" element={<InquiryForm />} />
            <Route
              path="/category/:categoryName"
              element={<DisplayContainer type="category" />}
            />
            <Route
              path="/brand/:brandName"
              element={<DisplayContainer type="brand" />}
            />
            <Route
              path="/payment"
              element={
                <RequireAuth loginPath="/login">
                  <StripeApp />
                </RequireAuth>
              }
            />
            {/* <Route path="/payment" element={<StripeApp />} /> */}
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
