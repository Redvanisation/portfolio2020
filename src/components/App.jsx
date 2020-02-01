import React from 'react';
import Nav from './Nav';
import Social from './Social';
import Header from '../containers/Header';
import Projects from '../containers/Projects';
import Contact from '../containers/Contact';
import Activity from '../containers/Activity';
import Footer from './Footer';
import DarkModeToggle from './darkMode/darkModeToggle';


const App = () => (
  <div className="app">
    <DarkModeToggle />
    <Nav />
    <Social />
    <Header />
    <Projects />
    <Contact />
    <Activity />
    <Footer />
  </div>
);

export default App;
