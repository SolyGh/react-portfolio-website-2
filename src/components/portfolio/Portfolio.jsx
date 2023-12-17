import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const portfolioItems = [
  {
    image: IMG1,
    title: "Portfolio Item 1",
    githubLink: "https://github.com",
    demoLink: "https://dribbble.com/Alien_pixels",
  },
  {
    image: IMG2,
    title: "Portfolio Item 2",
    githubLink: "https://github.com",
    demoLink: "https://dribbble.com/Alien_pixels",
  },
  {
    image: IMG3,
    title: "Portfolio Item 3",
    githubLink: "https://github.com",
    demoLink: "https://dribbble.com/Alien_pixels",
  },
  {
    image: IMG4,
    title: "Portfolio Item 4",
    githubLink: "https://github.com",
    demoLink: "https://dribbble.com/Alien_pixels",
  },
  {
    image: IMG5,
    title: "Portfolio Item 5",
    githubLink: "https://github.com",
    demoLink: "https://dribbble.com/Alien_pixels",
  },
  {
    image: IMG6,
    title: "Portfolio Item 6",
    githubLink: "https://github.com",
    demoLink: "https://dribbble.com/Alien_pixels",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioItems.map((item, index) => (
          <article className="portfolio__item" key={index}>
            <div className="portfolio__item-image">
              <img src={item.image} alt="" />
            </div>

            <h3>{item.title}</h3>

            <div className="portfolio__item-cta">
              <a href={item.githubLink} className="btn">
                Github
              </a>
              <a
                href={item.demoLink}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
