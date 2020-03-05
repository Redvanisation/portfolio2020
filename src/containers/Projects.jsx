/* eslint-disable max-len */
import React from 'react';
import Project from '../components/Project';
import theProjects from '../helpers/projects.json';
import imgProject1 from '../assets/mcb-techtalks.png';
import imgProject2 from '../assets/mcb-bookstore.png';
import imgProject3 from '../assets/mcb-battleship.png';
import imgProject4 from '../assets/insta-social.png';

const part1 = theProjects.slice(0, 2);
const part2 = theProjects.slice(2, theProjects.length);

const Projects = () => (
  <section className="projects block has-text-centered">
    <h2 className="section-title projects__title title is-2" id="projects">Featured Projects</h2>
    <h3 className="projects__quote title is-4">
      <span className="projects__quote--line-1">I didn&apos;t invent the internet </span>
      <span className="projects__quote--line-2">
        I just make it
        <span className="projects__quote--span"> look good</span>
      </span>
    </h3>

    <div className="btn-div">
      <a href="https://docs.google.com/document/d/1tcYCAfDQA46ZO4YZu0B3pKZfGZZCdsbDYOZ9eHAryZw/edit?usp=sharing" className="button button__red is-full" target="_blank" rel="noopener noreferrer">Resume</a>

    </div>

    <div className="columns projects__container">
      <Project key={part1[0].id} name={part1[0].title} description={part1[0].description} live={part1[0].live} github={part1[0].github} image={imgProject1} />
      <Project key={part1[1].id} name={part1[1].title} description={part1[1].description} live={part1[1].live} github={part1[1].github} image={imgProject2} />
    </div>
    <div className="columns projects__container">
      <Project key={part2[0].id} name={part2[0].title} description={part2[0].description} live={part2[0].live} github={part2[0].github} image={imgProject3} />
      <Project key={part2[1].id} name={part2[1].title} description={part2[1].description} live={part2[1].live} github={part2[1].github} image={imgProject4} />
    </div>
  </section>
);

export default Projects;
