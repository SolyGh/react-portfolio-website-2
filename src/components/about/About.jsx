import React from "react";
import "./about.css";
import ME from "../../assets/WhatsApp Image 2023-05-15 at 12.55.18 PM.jpeg";
import { FiAward } from "react-icons/fi";
import { FaUsers } from "react-icons/fa6";
import { FaFolderTree } from "react-icons/fa6";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know </h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />

              <h5>Experience</h5>
              <small>3+Years Working</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />

              <h5>Clients</h5>

              <small>300+ Clients Worldwide</small>
            </article>
            <article className="about__card">
              <FaFolderTree className="about__icon" />

              <h5>Projects</h5>
              <small>80+ completed projects</small>
            </article>
          </div>
          <p>
            lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit
            lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit
            lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit
            lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit
            lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
