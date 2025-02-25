import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="aboutPage">
      <div className="container">
        <div className="aboutUs">
          <p>ABOUT US</p>
          <h2>We are a team of content writers who share their learnings</h2>
        </div>
        <div className="aboutHero">
          <div className="aboutHeroText">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="aboutHeroImg">
            <img src="/abouthero.png" alt="" />
          </div>
        </div>
        <div className="aboutInfo">
          <div className="ourMission">
            <p className="aboutInfoTitle">Our mision</p>
            <h2>
              Creating valuable content for creatives all around the world
            </h2>
            <p className="infoText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
          </div>
          <div className="ourVision">
            <p className="aboutInfoTitle">Our Vision</p>
            <h2>A platform that empowers individuals to improve</h2>
            <p className="infoText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
          </div>
        </div>
        <div className="aboutBlogs">
          <div className="aboutBlog">
            <div className="aboutBlogText">
              <h2>Our team of creatives</h2>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat.
              </p>
            </div>
            <div className="aboutBlogImg">
              <img src="/aboutbox1.png" alt="" />
            </div>
          </div>
          <div className="aboutBlog">
            <div className="aboutBlogText">
              <h2>Why we started this Blog</h2>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat.
              </p>
            </div>
            <div className="aboutBlogImg">
              <img src="/aboutbox2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="aboutAuthors">
          <div className="authorsTitle">
            <h2>List of Authors</h2>
          </div>
          <div className="authors">
            <Link to={"/author"} className="authorBox">
              <div className="authorImg">
                <img src="/author1.svg" alt="" />
              </div>
              <h2>Floyd Miles</h2>
              <p>Content Writer @Company</p>
              <div className="authorSocials">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </Link>
            <div className="authorBox">
              <div className="authorImg">
                <img src="/author2.png" alt="" />
              </div>
              <h2>Floyd Miles</h2>
              <p>Content Writer @Company</p>
              <div className="authorSocials">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
            <div className="authorBox">
              <div className="authorImg">
                <img src="/author3.png" alt="" />
              </div>
              <h2>Floyd Miles</h2>
              <p>Content Writer @Company</p>
              <div className="authorSocials">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
            <div className="authorBox">
              <div className="authorImg">
                <img src="/author4.png" alt="" />
              </div>
              <h2>Floyd Miles</h2>
              <p>Content Writer @Company</p>
              <div className="authorSocials">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
            <div className="authorBox">
              <div className="authorImg">
                <img src="/author3.png" alt="" />
              </div>
              <h2>Floyd Miles</h2>
              <p>Content Writer @Company</p>
              <div className="authorSocials">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
            <div className="authorBox">
              <div className="authorImg">
                <img src="/author2.png" alt="" />
              </div>
              <h2>Floyd Miles</h2>
              <p>Content Writer @Company</p>
              <div className="authorSocials">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
            <div className="authorBox">
              <div className="authorImg">
                <img src="/author1.svg" alt="" />
              </div>
              <h2>Floyd Miles</h2>
              <p>Content Writer @Company</p>
              <div className="authorSocials">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
            <div className="authorBox">
              <div className="authorImg">
                <img src="/author4.png" alt="" />
              </div>
              <h2>Floyd Miles</h2>
              <p>Content Writer @Company</p>
              <div className="authorSocials">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="joinSection">
        <div className="container">
          <div className="sectionText">
            <h2>Join our team to be a part of our story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <button>Join Now</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
