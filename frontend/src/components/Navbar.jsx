import React, { useState, useEffect } from "react";
import "../Styling/css/components/navbar.css";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import SigninBtn from "./SigninBtn";

function Navbar({ isCartOpen, toggleCart }) {
  const [sideMenu, setSideMenu] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const location = useLocation();

  function toggleSideMenu() {
    setSideMenu((prevState) => (prevState = !prevState));
  }
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 120) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isHomePage = location.pathname === "/";
  return (
    <>
      <header className={`navbar `}>
        <div className={`main-nav-container ${isSticky ? "sticky" : ""}`}>
          <h1 className="site-title">herbs</h1>
          <SearchBar />
          <ul className="navbar-links">
            <li>
              <div className="cart-div" onClick={toggleCart}>
                <svg
                  focusable="false"
                  viewBox="2 2 24 24"
                  aria-hidden="true"
                  className="cart-svg"
                >
                  <path d="M21 15.54a.51.51 0 00.49-.38l2-8a.51.51 0 00-.1-.43.49.49 0 00-.39-.19H8.28L8 4.9a.51.51 0 00-.49-.4H5a.5.5 0 000 1h2.05L9 15l-2.36 4.74a.53.53 0 000 .49.5.5 0 00.42.23H21a.5.5 0 00.5-.5.5.5 0 00-.5-.5H7.89l1.92-3.92zm1.34-8l-1.73 7H9.92l-1.43-7zM10 21a1 1 0 101 1 1 1 0 00-1-1zM18 21a1 1 0 101 1 1 1 0 00-1-1z"></path>
                </svg>
                <div>
                  <span>Cart</span>
                </div>
              </div>
            </li>
            <li>
              <div className="sign-in-div">
                <SigninBtn />
              </div>
            </li>
          </ul>
          <div className="navbar-menu" onClick={toggleSideMenu}>
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path d="M10,1.445c-4.726,0-8.555,3.829-8.555,8.555c0,4.725,3.829,8.555,8.555,8.555c4.725,0,8.555-3.83,8.555-8.555C18.555,5.274,14.725,1.445,10,1.445 M10,17.654c-4.221,0-7.654-3.434-7.654-7.654c0-4.221,3.433-7.654,7.654-7.654c4.222,0,7.654,3.433,7.654,7.654C17.654,14.221,14.222,17.654,10,17.654 M14.39,10c0,0.248-0.203,0.45-0.45,0.45H6.06c-0.248,0-0.45-0.203-0.45-0.45s0.203-0.45,0.45-0.45h7.879C14.187,9.55,14.39,9.752,14.39,10 M14.39,12.702c0,0.247-0.203,0.449-0.45,0.449H6.06c-0.248,0-0.45-0.202-0.45-0.449c0-0.248,0.203-0.451,0.45-0.451h7.879C14.187,12.251,14.39,12.454,14.39,12.702 M14.39,7.298c0,0.248-0.203,0.45-0.45,0.45H6.06c-0.248,0-0.45-0.203-0.45-0.45s0.203-0.45,0.45-0.45h7.879C14.187,6.848,14.39,7.051,14.39,7.298"></path>
            </svg>
          </div>
        </div>
        {isHomePage && (
          <nav className="category-navebar">
            <div>
              <ul className="category-ul">
                <li className="category">
                  <Link to="/category/vitamin-B">vitamin B</Link>
                </li>
                <li className="category">
                  <Link to="/category/vitamin-E">vitamin E</Link>
                </li>
                <li className="category">
                  <Link to="/category/vitamin-C">vitamin C</Link>
                </li>
                <li className="category">
                  <Link to="/category/vitamin-D">vitamin D</Link>
                </li>
                <li className="category">
                  <Link to="/category/Zinc">Zinc</Link>
                </li>
                <li className="category">
                  <Link to="/category/Omega-3">Omega 3</Link>
                </li>
              </ul>
            </div>
          </nav>
        )}
      </header>
      {sideMenu && (
        <div className="sidebar">
          <div className="sidebar-content">
            <div className="side-search">
              <h4>Search for a product:</h4>
            </div>
            <li>
              <Link to={""}>Shop</Link>
            </li>
            <li>
              <Link to={"allposts"}>Brands</Link>
            </li>
            <li>
              <Link to={"drafts"}>Help with</Link>
            </li>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
