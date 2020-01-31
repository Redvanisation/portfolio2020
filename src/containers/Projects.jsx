import React from 'react';
import Search from '../components/Search';
import Project from '../components/Project';

const Projects = () => (
  <section className="projects block has-text-centered">
    <h2 className="projects__title title is-2">Projects</h2>
    <h3 className="projects__quote title is-4">I didn&apos;t invent the internet I just make it look good!</h3>
    <Search />
    <div className="columns projects__container">
      <Project name="Project One" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, veritatis." />
      <Project name="Project Two" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, veritatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, veritatis." />
      <Project name="Project Three" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, veritatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, veritatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, veritatis." />
    </div>
    <div className="columns projects__container">
      <Project name="Project Four" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, veritatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, veritatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, veritatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, veritatis." />
      <Project name="Project Five" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, veritatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, veritatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, veritatis." />
      <Project name="Project Six" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, veritatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, veritatis." />
    </div>
  </section>
);

export default Projects;
