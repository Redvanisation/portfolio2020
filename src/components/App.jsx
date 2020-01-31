import React from 'react';
import Nav from './Nav';
import Social from './Social';
import Header from '../containers/Header';
import Projects from '../containers/Projects';

const App = () => (
  <div className="app">
    <Nav />
    <Social />
    <Header />
    <Projects />
  </div>
);

export default App;
