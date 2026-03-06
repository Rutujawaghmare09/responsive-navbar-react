import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="nav-container">

        <div className="logo">
            <img className="img" 
            src="logo.jpg" />
            PixelCraft
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">About</a></li>

          <button className="nav-btn">Get Started</button>

        </ul>

        <div 
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

      </div>

    </nav>
  );
}

export default Navbar;