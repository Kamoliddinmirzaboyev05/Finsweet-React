import React from "react";
import "./Author.css";

function Author() {
  return (
    <div className="authorPage">
      <div className="authorHero">
        <div className="container">
          <div className="authorImg">
            <img src="/public/mainauthor.png" alt="" />
          </div>
          <div className="authorData">
            <h2>Hey there, I’m Andrew Jonhson and welcome to my Blog</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
            <div className="authorSocials">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="bottomLine">
            <img src="/public/bottom line.png" alt="" />
          </div>
        </div>
      </div>
      <section className="authorBlog">
        <div className="container">
          <h2 className="authorBlogTitle">My Posts</h2>
          <div className="authorPosts">
            <div className="authorPost">
              <div className="postImg">
                <img src="/public/authorpost2.png" alt="" />
              </div>
              <div className="postText">
                <p className="postType">BUSINESS</p>
                <h2>Font sizes in UI design: The complete guide to follow </h2>
                <p className="postInfo">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="authorPost">
              <div className="postImg">
                <img src="/public/authorpost1.png" alt="" />
              </div>
              <div className="postText">
                <p className="postType">ECONOMY</p>
                <h2>How to build rapport with your web design clients </h2>
                <p className="postInfo">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Author;
