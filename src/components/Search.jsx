/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="projects__search">
        <h3 className="projects__search--skill">HTML/CSS | </h3>
        <h3 className="projects__search--skill"> Ruby | </h3>
        <h3 className="projects__search--skill"> Rails | </h3>
        <h3 className="projects__search--skill"> JavaScript | </h3>
        <h3 className="projects__search--skill"> React/Redux | </h3>
        <h3 className="projects__search--skill"> React/Rails</h3>
      </div>
    );
  }
}

export default Search;
