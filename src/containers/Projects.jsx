/* eslint-disable max-len */
import React from 'react';
import Project from '../components/Project';
import theProjects from '../helpers/projects.json';


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


    <div className="columns is-multiline ">
      {
        theProjects.map((project) => <Project key={project.id} name={project.title} description={project.description} live={project.live} github={project.github} image={project.image} />)
      }
    </div>
  </section>
);

export default Projects;
