import React, { useState } from "react";
import "./Category.css";
import { useParams } from "react-router-dom";
function Category({ categories }) {
  const { id } = useParams();

  const [oneProduct, setOneProduct] = useState(
    categories.filter((item) => {
      return id == item.id;
    })
  );
  console.log(oneProduct);
  return (
    <div className="categoryPage">
      <div className="categoryHero">
        <div className="container">
          <h2>{oneProduct[0].title}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <h3>
            Home <i className="fas fa-chevron-right"></i> {oneProduct[0].title}
          </h3>
        </div>
      </div>
      <main>
        <section className="mainContent">
          <div className="container">
            <div className="blogPosts">
              {oneProduct[0].post.map((item) => {
                return (
                  <div className="blogPost">
                    <div className="postImg">
                      <img src="/categorypost.png" alt="" />
                    </div>
                    <div className="postText">
                      <p className="postType">{item.type}</p>
                      <h2>{item.title}</h2>
                      <p className="postInfo">
                       {item.info}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="leftSide">
              <div className="categories">
                <h2 className="categoriesTitle">Categories</h2>
                <div className="oneCategory">
                  <div className="categoryImg">
                    <img src="/Icon1.svg" alt="" />
                  </div>
                  <h2>Buisness</h2>
                </div>
                <div className="oneCategory">
                  <div className="categoryImg">
                    <img src="/Icon2.svg" alt="" />
                  </div>
                  <h2>Startup</h2>
                </div>
                <div className="oneCategory">
                  <div className="categoryImg">
                    <img src="/public/Icon3.svg" alt="" />
                  </div>
                  <h2>Economy</h2>
                </div>
                <div className="oneCategory">
                  <div className="categoryImg">
                    <img src="/public/Icon4.svg" alt="" />
                  </div>
                  <h2>Technology</h2>
                </div>
              </div>
              <div className="allTags">
                <h2 className="categoriesTitle">All tags</h2>
                <div className="tags">
                  <span>
                    <p>Business</p>
                  </span>
                  <span>
                    <p>Experience</p>
                  </span>
                  <span>
                    <p>Screen</p>
                  </span>
                  <span>
                    <p>Technology</p>
                  </span>
                  <span>
                    <p>Marketing</p>
                  </span>
                  <span>
                    <p>Life</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Category;
