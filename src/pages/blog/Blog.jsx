import React from "react";
import "./Blog.css";
function Blog() {
  return (
    <>
      <div className="blogHero">
        <div className="container">
          <div className="blogHeroText">
            <p className="featured">FEATURED POST</p>
            <h1>Step-by-step guide to choosing great font pairs</h1>
            <p className="author">
              By <span className="colorSpan">John Doe</span> | May 23, 2022
            </p>
            <p className="blogHeroPara">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <button className="readMoreBtn">
              <p>Read More </p>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <div className="blogHeroImg">
            <img src="/blogheroimg.png" alt="" />
          </div>
        </div>
      </div>
      <main>
        <section className="allPosts">
          <div className="container">
            <h2 className="sectionTitle"> All posts</h2>
            <div className="blogPosts">
              <div className="blogPost">
                <div className="postImg">
                  <img src="/blogimg1.png" alt="" />
                </div>
                <div className="postText">
                  <p className="postType">STARTUP</p>
                  <h2>
                    Design tips for designers that cover everything you need
                  </h2>
                  <p className="postInfo">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </p>
                </div>
              </div>
              <div className="blogPost">
                <div className="postImg">
                  <img src="/blogimg2.png" alt="" />
                </div>
                <div className="postText">
                  <p className="postType">BUSINESS</p>
                  <h2>How to build rapport with your web design clients </h2>
                  <p className="postInfo">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </p>
                </div>
              </div>
              <div className="blogPost">
                <div className="postImg">
                  <img src="/blogimg3.png" alt="" />
                </div>
                <div className="postText">
                  <p className="postType">STARTUP</p>
                  <h2>Logo design trends to avoid in 2022 </h2>
                  <p className="postInfo">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </p>
                </div>
              </div>
              <div className="blogPost">
                <div className="postImg">
                  <img src="/blogimg4.png" alt="" />
                </div>
                <div className="postText">
                  <p className="postType">TECHNOLOGY</p>
                  <h2>
                    8 Figma design systems you can download for free today{" "}
                  </h2>
                  <p className="postInfo">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </p>
                </div>
              </div>
              <div className="blogPost">
                <div className="postImg">
                  <img src="/blogimg1.png" alt="" />
                </div>
                <div className="postText">
                  <p className="postType">ECONOMY</p>
                  <h2>
                    Font sizes in UI design: The complete guide to follow{" "}
                  </h2>
                  <p className="postInfo">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </p>
                </div>
              </div>
            </div>
            <div className="postBtns">
              <button className="prevBtn">
                {" "}
                <i className="fas fa-chevron-left"></i> prev{" "}
              </button>
              <button className="nextBtn">
                {" "}
                Next <i className="fas fa-chevron-right"></i>{" "}
              </button>
            </div>
          </div>
        </section>
        <section className="section2">
          <div className="container">
            <h1 className="categoriesTitle">All Categories</h1>
            <div className="catagories">
              <div className="catagory">
                <div className="icon">
                  <img src="/Icon1.svg" alt="" />
                </div>
                <h1>Business</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
              <div className="catagory">
                <div className="icon2">
                  <img src="/Icon2.svg" alt="" />
                </div>
                <h1>Startup</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
              <div className="catagory">
                <div className="icon">
                  <img src="/Icon3.svg" alt="" />
                </div>
                <h1>Economy</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
              <div className="catagory">
                <div className="icon">
                  <img src="/icon4.svg" alt="" />
                </div>
                <h1>Technology</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
            </div>
          </div>
        </section>
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
      </main>
    </>
  );
}

export default Blog;
