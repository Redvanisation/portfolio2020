import React from 'react';

const Project = ({ name, description }) => (
  <div className="projects__project column">
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
);

export default Project;
