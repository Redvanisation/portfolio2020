/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  FaGithub, FaTwitter, FaLinkedinIn, FaDev,
} from 'react-icons/fa';

const Social = () => (
  <div className="social">
    <a href="https://github.com/Redvanisation" target="_blank" rel="noreferrer noopener" className="social__item--link social__item">
      <div className="social__item">
        <FaGithub className="social__item--icon" />
      </div>
    </a>
    <a href="https://twitter.com/redvanisation" target="_blank" rel="noreferrer noopener" className="social__item--link">
      <div className="social__item">
        <FaTwitter className="social__item--icon" />
      </div>
    </a>
    <a href="https://www.linkedin.com/in/redvan/" target="_blank" rel="noreferrer noopener" className="social__item--link">
      <div className="social__item">
        <FaLinkedinIn className="social__item--icon" />
      </div>
    </a>
    <a href="https://dev.to/redvanisation" target="_blank" rel="noreferrer noopener" className="social__item--link">
      <div className="social__item">
        <FaDev className="social__item--icon" />
      </div>
    </a>
  </div>
);

export default Social;
