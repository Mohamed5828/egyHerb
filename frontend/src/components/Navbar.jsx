import React, { useState, useEffect } from "react";
import "../Styling/css/components/navbar.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar() {
  const [sideMenu, setSideMenu] = useState(false);
  const [isSticky, setSticky] = useState(false);
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

  return (
    <>
      <header className={`navbar `}>
        <div className={`main-nav-container ${isSticky ? "sticky" : ""}`}>
          <h1 className="site-title">herbs</h1>
          <SearchBar />
          <ul className="navbar-links">
            <li>
              <div className="cart-div">
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
                <svg
                  focusable="false"
                  viewBox="2 2 24 24"
                  aria-hidden="true"
                  className="sign-in-svg"
                >
                  <path d="M14 4.5a9.5 9.5 0 109.5 9.5A9.51 9.51 0 0014 4.5zM9.26 21.05v-2.17a3.37 3.37 0 013.36-3.36h2.74a3.37 3.37 0 013.36 3.36v2.19a8.47 8.47 0 01-9.48 0zM14 14.5a2.5 2.5 0 112.5-2.5 2.5 2.5 0 01-2.5 2.5zm5.73 5.76v-1.38a4.37 4.37 0 00-3.44-4.26A3.45 3.45 0 0017.5 12a3.5 3.5 0 00-7 0 3.45 3.45 0 001.21 2.62 4.37 4.37 0 00-3.44 4.26v1.38a8.5 8.5 0 1111.46 0z"></path>
                </svg>
                <div>
                  <span>Sign in</span>
                </div>
              </div>
            </li>
          </ul>
          <div className="navbar-menu" onClick={toggleSideMenu}>
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path d="M10,1.445c-4.726,0-8.555,3.829-8.555,8.555c0,4.725,3.829,8.555,8.555,8.555c4.725,0,8.555-3.83,8.555-8.555C18.555,5.274,14.725,1.445,10,1.445 M10,17.654c-4.221,0-7.654-3.434-7.654-7.654c0-4.221,3.433-7.654,7.654-7.654c4.222,0,7.654,3.433,7.654,7.654C17.654,14.221,14.222,17.654,10,17.654 M14.39,10c0,0.248-0.203,0.45-0.45,0.45H6.06c-0.248,0-0.45-0.203-0.45-0.45s0.203-0.45,0.45-0.45h7.879C14.187,9.55,14.39,9.752,14.39,10 M14.39,12.702c0,0.247-0.203,0.449-0.45,0.449H6.06c-0.248,0-0.45-0.202-0.45-0.449c0-0.248,0.203-0.451,0.45-0.451h7.879C14.187,12.251,14.39,12.454,14.39,12.702 M14.39,7.298c0,0.248-0.203,0.45-0.45,0.45H6.06c-0.248,0-0.45-0.203-0.45-0.45s0.203-0.45,0.45-0.45h7.879C14.187,6.848,14.39,7.051,14.39,7.298"></path>
            </svg>
          </div>
        </div>
        <nav className="category-navebar">
          <div>
            <ul className="category-ul">
              <li className="category">vitamin B</li>
              <li className="category">vitamin E</li>
              <li className="category">vitamin C</li>
              <li className="category">vitamin D</li>
              <li className="category">Zinc</li>
              <li className="category">Omega 3</li>
            </ul>
          </div>
        </nav>
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
