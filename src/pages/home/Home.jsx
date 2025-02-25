import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
function Home({ categories }) {
  return (
    <>
      <div className="hero">
        <div className="container">
          <p className="hero-title">
            Posted on <span className="bolder">startup</span>
          </p>
          <h1 className="hero-theme">
            Step-by-step guide to choosing great font pairs
          </h1>
          <p className="hero-about">
            By <span className="orange">James West</span> | May 23, 2022{" "}
          </p>
          <p className="hero-about">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <button className="read-more1">
            <p>Read More </p>
          </button>
        </div>
      </div>
      <main>
        <section className="section1">
          <div className="container">
            <div className="titles">
              <h1 className="left">Featured Post</h1>
              <h1 className="right">All Post</h1>
            </div>
            <div className="block">
              <div className="featuerd-post">
                <div className="post-img">
                  <img src="/section2.png" alt="" />
                </div>
                <div className="post-text">
                  <p className="post-about">
                    By <span className="pink">James West</span> | May 23, 2022{" "}
                  </p>
                  <h1 className="post-theme">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </h1>
                  <p className="post-about2">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </p>
                </div>
                <button className="read-more2">
                  <p>Read More </p>{" "}
                  <h2>
                    {" "}
                    <i className="fas fa-chevron-right"></i>{" "}
                  </h2>
                </button>
              </div>
              <div className="all-post">
                <div className="card">
                  <p>
                    By <span className="pink">John Deo</span> l Aug 23, 2021{" "}
                  </p>
                  <h2>
                    8 Figma design systems that you can download for free today.
                  </h2>
                </div>
                <div className="card">
                  <p>
                    By <span className="pink">John Deo</span> l Aug 23, 2021{" "}
                  </p>
                  <h2>
                    8 Figma design systems that you can download for free today.
                  </h2>
                </div>
                <div className="card">
                  <p>
                    By <span className="pink">John Deo</span> l Aug 23, 2021{" "}
                  </p>
                  <h2>
                    8 Figma design systems that you can download for free today.
                  </h2>
                </div>
                <div className="card">
                  <p>
                    By <span className="pink">John Deo</span> l Aug 23, 2021{" "}
                  </p>
                  <h2>
                    8 Figma design systems that you can download for free today.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section2">
          <div className="container">
            <h1 className="section2-title">Choose A Catagory</h1>
            <div className="catagories">
              {categories.map((item) => {
                return (
                  <Link to={`/category/${item.id}`}>
                    <div className="catagory">
                      <div className="icon">
                        <img src={item.img} alt="" />
                      </div>
                      <h1>{item.title}</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit.
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
        <section className="section3">
          <div className="container">
            <div className="section3-text">
              <h3>Why we started </h3>
              <h1>
                It started out as a simple idea and evolved into <br />
                our passion
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
              <button>Discover our story</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
