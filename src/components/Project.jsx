/* eslint-disable global-require */
import React from 'react';

const Project = ({ name, description }) => (
  <div className="projects__project column">
    <figure className="projects__project--card">
      <img src={require('../assets/mcb.png')} alt="" className="projects__project--img" />
      <figcaption className="projects__project--description-div">
        <h3 className="projects__project--title text-colored">{name}</h3>
        <p className="projects__project--description">{description}</p>
      </figcaption>
    </figure>
  </div>
);

export default Project;
