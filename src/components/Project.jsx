/* eslint-disable global-require */
import React from "react";
import PropTypes from "prop-types";
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = ({ name, description, live, github, image }) => (
  <div className="projects__project column is-one-third">
    <figure className="projects__project--card">
      <img src={image} alt="" className="projects__project--img" />
      <figcaption className="projects__project--description-div">
        <h3 className="title projects__project--title text-colored header-title">
          {name}
        </h3>
        <p className="projects__project--description">{description}</p>
        <div className="projects__project--links">
          <a
            href={github}
            className="title is-6 projects__project--link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <FaExternalLinkAlt className="projects__project--link-icon" />
          </a>
        </div>
      </figcaption>
    </figure>
  </div>
);

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Project;
