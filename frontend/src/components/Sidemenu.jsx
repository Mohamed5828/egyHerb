import React from "react";
import { Link } from "react-router-dom";

function Sidemenu({ isSideMenu, toggleSideMenu }) {
  return (
    <div>
      {isSideMenu && (
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
    </div>
  );
}

export default Sidemenu;
