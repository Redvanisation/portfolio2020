import React from 'react';
import Logo from '../components/Logo';
import DarkModeToggle from '../components/darkMode/darkModeToggle';
import Intro from '../components/Intro';

const Header = () => (
  <div className="header">
    <Logo />
    <DarkModeToggle />
    <Intro />
  </div>

);

export default Header;
