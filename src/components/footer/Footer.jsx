import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div class="container">
        <div class="footer-nav">
          <div class="logo">
            <img src="img/Logo.svg" alt="" />
          </div>
          <div class="navbar-nav">
            <ul class="links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-hero">
          <h1>Subscribe to our news letter to get latest updates and news</h1>
          <div class="contact">
            <form>
              <input type="text" placeholder="Enter Your Email" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
        <div class="footer-foot">
          <div class="adress">
            <p>Finstreet 118 2561 Fintown</p>
            <p>Hello@finsweet.com 020 7993 2905</p>
          </div>
          <div class="socials">
            <img src="img/facebook.svg" alt="" />
            <img src="img/twitter.svg" alt="" />
            <img src="img/instagram.svg" alt="" />
            <img src="img/ln.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
