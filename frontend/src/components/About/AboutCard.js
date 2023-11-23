import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Diganta Halder </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />
            I am currently looking for job as a Full Stack Developer.
            <br />
            I have completed BE in ECE at RRIT, Bangalore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Aspire to create meaningful impact through your creations!"{" "}
          </p>
          <footer className="blockquote-footer">Diganta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
