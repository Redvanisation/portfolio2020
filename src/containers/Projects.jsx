import React from 'react';
import Search from '../components/Search';
import Project from '../components/Project';
import theProjects from '../helpers/projects.json';

const part1 = theProjects.slice(0, 2);
const part2 = theProjects.slice(2, theProjects.length);

const Projects = () => (
  <section className="projects block has-text-centered">
    <h2 className="projects__title title is-2">Featured Projects</h2>
    <h3 className="projects__quote title is-4">I didn&apos;t invent the internet I just make it look good!</h3>
    <Search />
    <div className="columns projects__container">
      {part1.map(prj => <Project name={prj.title} description={prj.description} />)}
    </div>
    <div className="columns projects__container">
      {part2.map(prj => <Project name={prj.title} description={prj.description} />)}
    </div>
  </section>
);

export default Projects;
