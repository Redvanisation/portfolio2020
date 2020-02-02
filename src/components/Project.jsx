import React from 'react';
import ProjectImage from './ProjectImage';

const Project = ({ name, description }) => (
  <div className="projects__project column">
    {/* <h3 className="title is-4 projects__project--title">{name}</h3>
    <p className="projects__project--description">{description}</p> */}
    <ProjectImage url={require('../assets/mac.png')} />
  </div>
);

export default Project;
