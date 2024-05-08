import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bs from "../../Assets/Projects/bs.png";
import bs2 from "../../Assets/Projects/bs2.png";
import beckly from "../../Assets/Projects/becklyn.png";
import beckly2 from "../../Assets/Projects/becklyn2.png";
import eGroupInfocenter from "../../Assets/Projects/egroup-infocenter-client.png";
import eGroupInfocenter2 from "../../Assets/Projects/egroup-infocenter-client2.png";
import dsiSolution from "../../Assets/Projects/dsiSolution.png";
import dsiSolution2 from "../../Assets/Projects/dsiSolution2.png";
import egroupMaterial from "../../Assets/Projects/egroup-material.png";
import egroupMaterial2 from "../../Assets/Projects/egroup-material2.png";
import familytree from "../../Assets/Projects/familytree.png";
import familytree2 from "../../Assets/Projects/familytree2.png";
import fruit from "../../Assets/Projects/fruit.png";
import houswork from "../../Assets/Projects/Hourswork.png";
import tide from "../../Assets/Projects/tide.png";
import tide2 from "../../Assets/Projects/tide2.png";

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
              imgPath={eGroupInfocenter}
              nextPath={eGroupInfocenter2}
              isBlog={false}
              title="eGroup Infocenter Client"
              description="CMS Web Application build with Next.js, TypeScript, Material-UI, and Java. Have features which allows Customer management, Finantial management, Event management and Data management."
              demoLink="https://www.egroup-infocenter.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dsiSolution}
              nextPath={dsiSolution2}
              isBlog={false}
              title="DSI Solution"
              description="Customer CMS Web Application for example. Have features which allows Customer management, for contents of the website through inforcenter CMS module."
              demoLink="https://www.dsi-solution.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={egroupMaterial}
              nextPath={egroupMaterial2}
              isBlog={false}
              title="eGroup Material Liabrary"
              description="eGroup Team Material Component Library build with React.js and storybook. The library contains many useful react components that can be used easily and extended in any project. Also has many custom hooks."
              demoLink="https://www.chromatic.com/library?appId=6315727d26061e4ff69beeea"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tide}
              nextPath={tide2}
              isBlog={false}
              title="Tide Exchange"
              description="This page build with React.js and Tailwind Css which takes the blockchain data with Web3 library."
              demoLink="https://app.tide.exchange/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={familytree}
              nextPath={familytree2}
              isBlog={false}
              title="Family Tree"
              description="It is designed to have extensive functionality while being simple to use, secure, and accessible. It was built with Vue and Laravel framework."
              demoLink="https://www.familytree365.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fruit}
              nextPath={houswork}
              isBlog={false}
              title="Housework"
              description="Most respondents were in touch with their family, and their relatives generally offered social contacts and considerable support, particularly with shopping, housework, outings and room-decoration."
              demoLink="https://www.housework.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bs}
              nextPath={bs2}
              isBlog={false}
              title="Plant"
              description="This page was built using Angular.js and Bootstrap to analyze blockchain data and exchange token."
              demoLink="https://plant.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={beckly}
              nextPath={beckly2}
              isBlog={false}
              title="Exploring Digital Future"
              description="Becklyn. Beck+Lyn*. It's like Yin + Yang. Raison + Emotion. Technology + Design. Brands + Marketing. Reliability + Creativity. Business Growth + Focus on Relationships. Digitalization + Humanity. Transformation + Evolution. Contrast + Unity. Just what it takes to create great things together."
              demoLink="https://becklyn.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
