/* eslint-disable global-require */
import React from 'react';

const Project = ({
  name, description, live, github,
}) => (
  <div className="projects__project column">
    <figure className="projects__project--card">
      <img src={require('../assets/mcb.png')} alt="" className="projects__project--img" />
      <figcaption className="projects__project--description-div">
        <h3 className="title projects__project--title text-colored header-title">{name}</h3>
        <p className="projects__project--description">{description}</p>
        <div className="projects__project--links">
          <a href={live} className="title is-6 projects__project--link">Demo</a>
          <a href={github} className="title is-6 projects__project--link">GitHub</a>
        </div>
      </figcaption>
    </figure>
  </div>
);

export default Project;
