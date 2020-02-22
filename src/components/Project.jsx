/* eslint-disable global-require */
import React from 'react';

const Project = ({
  name, description, live, github, image
}) => (
  <div className="projects__project column">
    <figure className="projects__project--card">
      <img src={image} alt="" className="projects__project--img" />
      <figcaption className="projects__project--description-div">
        <h3 className="title projects__project--title text-colored header-title">{name}</h3>
        <p className="projects__project--description">{description}</p>
        <div className="projects__project--links">
          <a href={live} className="title is-6 projects__project--link" target="_blank" rel="noopener noreferrer">Demo</a>
          <a href={github} className="title is-6 projects__project--link" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </figcaption>
    </figure>
  </div>
);

export default Project;
