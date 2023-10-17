import React from "react";
import "./Body.css"; // Import your custom CSS file
import profileImage from "../assets/profile.jpeg"; // Import your profile image

const Body = () => {
  return (
    <div className="container">
      <div className="left-section">
        <div className="intro-section">
          <h1 className="animated-text">
            Hi There,
            <br />
            I am Digonta Halder
            <br />I am into Web Development
          </h1>
        </div>
        <div className="social-links">
          <a href="https://www.instagram.com/digontahalder/">
            <span role="img" aria-label="Instagram">
              📷
            </span>{" "}
            Instagram
          </a>
          <a href="groupcaptain40@gmail.com">
            <span role="img" aria-label="Gmail">
              📧
            </span>{" "}
            Gmail
          </a>
          <a href="https://t.me/@DIGANTA14000">
            <span role="img" aria-label="Telegram">
              ✈️
            </span>{" "}
            Telegram
          </a>
          <a href="https://wa.me/917908293134">
            <span role="img" aria-label="WhatsApp">
              📱
            </span>{" "}
            Whatsapp
          </a>
          <a href="https://github.com/group14000">
            <span role="img" aria-label="GitHub">
              🐱
            </span>{" "}
            Github
          </a>
          <a href="https://www.linkedin.com/in/diganta-halder-aa7a141a2/">
            <span role="img" aria-label="LinkedIn">
              📚
            </span>{" "}
            Linkedin
          </a>
          <a href="https://twitter.com/MacebookA">
            <span role="img" aria-label="Twitter">
              🐦
            </span>{" "}
            Twitter
          </a>
        </div>
      </div>
      <div className="right-section">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
    </div>
  );
};

export default Body;
