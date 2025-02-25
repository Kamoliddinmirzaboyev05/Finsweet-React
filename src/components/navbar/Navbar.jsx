import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <Link to={"/"}>
            <img src="/Logo.svg" alt="" />
          </Link>
        </div>
        <div className="navbar-nav">
          <ul className="links">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
          </ul>
          <button>
            <p>Subscribe</p>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
