import React, { useState } from "react";
import "../Styling/css/components/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [sideMenu, setSideMenu] = useState(false);
  const [search, setSearch] = useState(false);
  function toggleSideMenu() {
    setSideMenu((prevState) => (prevState = !prevState));
  }
  function toggleSearch() {
    setSearch((prevState) => (prevState = !prevState));
  }

  return (
    <>
      <header className="navbar">
        <h1 className="site-title">herbs</h1>
        <nav>
          <div className="nav-search">
            {search && (
              <li>
                <Link onClick={toggleSearch}>Close Search</Link>
              </li>
            )}
          </div>
          {!search && (
            <ul className="navbar-links">
              <li>
                <Link to={""}>Shop</Link>
              </li>
              <li>
                <Link to={"allposts"}>Brands</Link>
              </li>
              <li>
                <Link to={"drafts"}>Help with</Link>
              </li>
              <li>
                <Link className="nav-btn" onClick={toggleSearch}>
                  Search
                </Link>
              </li>
            </ul>
          )}
          <button className="navbar-menu" onClick={toggleSideMenu}>
            Menu
          </button>
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
