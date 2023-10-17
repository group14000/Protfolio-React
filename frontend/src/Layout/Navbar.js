import React from "react";
import logo from "../assets/logo.jpg";
import "./Navbar.css"; // Import your custom CSS file
import Body from "./Body";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="image-container">
          <img src={logo} alt="Image1" />
        </div>
        <div className="list-container">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/education">Education</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/experience">Experience</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <Body />
    </>
  );
};

export default Navbar;
