/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  FaGithub, FaTwitter, FaLinkedinIn, FaDev,
} from 'react-icons/fa';

const Social = () => (
  <div className="social">
    <div className="social__item">
      <a href="https://github.com/Redvanisation" target="_blank" rel="noreferrer noopener" className="social__item--link"><FaGithub className="social__item--icon" /></a>
    </div>
    <div className="social__item">
      <a href="https://twitter.com/redvanisation" target="_blank" rel="noreferrer noopener" className="social__item--link"><FaTwitter className="social__item--icon" /></a>
    </div>
    <div className="social__item">
      <a href="https://www.linkedin.com/in/redvan/" target="_blank" rel="noreferrer noopener" className="social__item--link"><FaLinkedinIn className="social__item--icon" /></a>
    </div>
    <div className="social__item">
      <a href="https://dev.to/redvanisation" target="_blank" rel="noreferrer noopener" className="social__item--link"><FaDev className="social__item--icon" /></a>
    </div>
  </div>
);

export default Social;
