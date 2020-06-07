/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  FaGithub, FaTwitter, FaLinkedinIn, FaDev,
} from 'react-icons/fa';
import logofooter from '../assets/logofooter.svg';

const Footer = () => (
  <footer className="footer has-text-centered">
    <img src={logofooter} alt="Footer Logo" className="footer__logo" />
    <div className="footer__social">
      <p className="title is-5 footer__social--title ">Find me on:</p>
      <a href="https://github.com/Redvanisation" target="_blank" rel="noreferrer noopener" className="footer__social--link"><FaGithub className="footer__social--icon" /></a>
      <a href="https://twitter.com/redvanisation" target="_blank" rel="noreferrer noopener" className="footer__social--link"><FaTwitter className="footer__social--icon" /></a>
      <a href="https://www.linkedin.com/in/redvan/" target="_blank" rel="noreferrer noopener" className="footer__social--link"><FaLinkedinIn className="footer__social--icon" /></a>
      <a href="https://dev.to/redvanisation" target="_blank" rel="noreferrer noopener" className="footer__social--link"><FaDev className="footer__social--icon" /></a>
    </div>
  </footer>
);

export default Footer;
