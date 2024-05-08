import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">a passionate and experienced </span>
            software developer.
            <br />
            I have a strong foundation in widely-used programming languages such
            as C++, JavaScript, TypeScript and PHP, and I've utilized them to
            build various web technologies and products. I am particularly
            interested in leveraging my skills and exploring opportunities in
            the field of Web2/Web3 with blockchain technologies.
            <br />
            I specialize in developing web applications using Node.js and modern
            JavaScript libraries and frameworks, including React.js, Vue,
            Next.js and Nuxt.js. I have hands-on experience in building scalable
            and user-friendly interfaces, ensuring optimal performance and a
            seamless user experience.
            <br />
            Throughout my career, I've gained valuable experience collaborating
            with cross-functional teams, contributing to all stages of the
            development lifecycle, and delivering high-quality solutions within
            demanding deadlines.
            <br />I am always eager to learn and adapt to new technologies, and
            I believe that my strong problem-solving skills and attention to
            detail make me a valuable addition to any software development team.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> CRM, CMS, LMS Web Application, Booking Web
              site...
            </li>
            <li className="about-activity">
              <ImPointRight /> DAPP, Bolckchain Game
            </li>
            <li className="about-activity">
              <ImPointRight /> Mobile Application
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
