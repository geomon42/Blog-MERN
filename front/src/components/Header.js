import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <header className="clearfix header-style5">
        <div className="logo-place">
          <div className="container">
            <div className="inner-logo-place">
              <a className="navbar-brand" href="index.html">
                <img src="images/lagalag.png" alt="GALA" />
              </a>
            </div>
          </div>
        </div>

        <Navbar />
      </header>
    </div>
  );
};

export default Header;
