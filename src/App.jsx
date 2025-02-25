import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Category from "./pages/category/Category";
import Author from "./pages/author/Author";
function App() {
  const [categories, setCategories] = useState([
    {
      id: 0,
      img: "/Icon1.svg",
      title: "Business",
      descr: "lorem ipsum doler amet dev aklek eedededjkd",
    },
    {
      id: 1,
      img: "/Icon2.svg",
      title: "Startup",
      descr: "lorem ipsum doler amet dev aklek eedededjkd",
    },
    {
      id: 2,
      img: "/public/Icon3.svg",
      title: "Economy",
      descr: "lorem ipsum doler amet dev aklek eedededjkd",
    },
    {
      id: 3,
      img: "/public/Icon4.svg",
      title: "Technology",
      descr: "lorem ipsum doler amet dev aklek eedededjkd",
    },
  ]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home categories={categories} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/author" element={<Author />} />
        <Route
          path="/category/:id"
          element={<Category categories={categories} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
