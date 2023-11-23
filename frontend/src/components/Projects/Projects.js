import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolioImage from "../../assets/Projects/protfolio.png";
import mailBoxImage from "../../assets/Projects/mail-box.png";
import expenseTrackerImage from "../../assets/Projects/expense-tracker.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolioImage}
              isBlog={false}
              title="Portfolio"
              description="Crafting a personal portfolio website allows me to showcase my skills, projects, and experiences in a dynamic and visually compelling manner. Explore my journey, discover the projects I've undertaken, and get to know the unique blend of skills that define me. Welcome to my digital space, where innovation and creativity come to life!"
              ghLink="https://github.com/group14000/Protfolio-React.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mailBoxImage}
              isBlog={false}
              title="Mail Box"
              description="Discover the perfect mailbox for your needs at our website! Explore a range of stylish and functional mailboxes designed to complement your home. From classic to modern, find the ideal solution that adds both charm and security. Upgrade your curb appeal and receive mail in style with our diverse collection. Browse now for a better mailbox experience!"
              ghLink="https://github.com/group14000/Gmail-clone-mail-box.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expenseTrackerImage}
              isBlog={false}
              title="Expense Tracker"
              description="Effortlessly manage your finances with our intuitive Expense Tracker website. Gain control over your spending, track transactions, and achieve your financial goals with ease. Start your journey to financial wellness today!"
              ghLink="https://github.com/group14000/Expense_tracker-advanvced.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
