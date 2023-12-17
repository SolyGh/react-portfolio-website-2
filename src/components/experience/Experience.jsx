import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience_frontend">
          <h3> Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>Tailwind</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <h4>React</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>

        {/* end of front end */}

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <div className="experience_content">
              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details-icon" />
                <h4>Node</h4>
                <small className="text-light">Experienced</small>
              </article>
              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details-icon" />
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </article>
              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details-icon" />
                <h4>Php</h4>
                <small className="text-light">Intermediate</small>
              </article>
              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details-icon" />
                <h4>MySql</h4>
                <small className="text-light">Basic</small>
              </article>
              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details-icon" />
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
