import React from 'react';
import { FaGithub, FaTwitter, FaLinkedinIn, FaMediumM, FaDev } from 'react-icons/fa';

const Social = () => (
  <div className="social">
    <div className="social__item">
      <a href="#" className="social__item--link"><FaGithub className="social__item--icon" /></a>
    </div>
    <div className="social__item">
      <a href="#" className="social__item--link"><FaTwitter className="social__item--icon" /></a>
    </div>
    <div className="social__item">
      <a href="#" className="social__item--link"><FaLinkedinIn className="social__item--icon" /></a>
    </div>
    {/* <div className="social__item">
      <a href="#" className="social__item--link"><FaMediumM className="social__item--icon" /></a>
    </div> */}
    <div className="social__item">
      <a href="#" className="social__item--link"><FaDev className="social__item--icon" /></a>
    </div>
  </div>
);

export default Social;
