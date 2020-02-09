/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Link } from 'react-scroll';


class Nav extends Component {
    constructor() {
        super();
        this.state = {
            checked: false,
        }
        this.showHideMenu = this.showHideMenu.bind(this);
    }

    showHideMenu() {
        this.setState({
            checked: !this.state.checked,
        });
    }

    render() {
        const { checked } = this.state;
        return (
            <div className="navigation">
              <input type="checkbox" className="navigation__checkbox" id="navi-toggle" onClick={this.showHideMenu} checked={checked ? true : false} readOnly />
              <label htmlFor="navi-toggle" className="navigation__button">
                  <span className="navigation__icon">&nbsp;</span>
              </label>
          
              <div className="navigation__background">&nbsp;</div>
          
              <nav className="navigation__nav" onClick={this.showHideMenu}>
                  <ul className="navigation__list">
                    <li className="navigation__item">
                      <Link
                        className="navigation__link"
                        to="home"
                        smooth
                        duration={500}
                        onClick={this.showHideMenu}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="navigation__item">
                      <Link
                        className="navigation__link"
                        to="projects"
                        smooth
                        duration={500}
                        onClick={this.showHideMenu}
                      >
                        Projects
                      </Link>
                    </li>
                    <li className="navigation__item">
                      <Link
                        className="navigation__link"
                        to="contact"
                        smooth
                        duration={500}
                        onClick={this.showHideMenu}
                      >
                        Contact
                      </Link>
                    </li>
                    <li className="navigation__item">
                      <Link
                        className="navigation__link"
                        to="activity"
                        smooth
                        duration={500}
                        onClick={this.showHideMenu}
                      >
                        Activity
                      </Link>
                    </li>
                  </ul>
              </nav>
            </div>
          );
          
    }
} 


export default Nav;
