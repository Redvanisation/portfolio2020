import React from 'react';
import ProjectImage from './ProjectImage';

const Project = ({ name, description }) => (
  <div className="projects__project column">
    <div className="projects__project--description">

      <h3 className="title is-4 projects__project--title">{name}</h3>
      {description}
      {/* <p className="projects__project--description">{description}</p> */}
    </div>
    <ProjectImage url={require('../assets/mac.png')} />
  </div>
);

export default Project;
