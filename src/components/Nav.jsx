import React from 'react';

const Nav = () => (
  <div className="navigation">
    <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
    <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
    </label>

    <div className="navigation__background">&nbsp;</div>

    <nav className="navigation__nav">
        <ul className="navigation__list">
            <li className="navigation__item">
                <a href="#section-about" className="navigation__link">Main</a>
            </li>
            <li className="navigation__item">                    
                <a href="#section-projects" className="navigation__link">Projects</a>
            </li>
            <li className="navigation__item">
                    <a href="#section-skills" className="navigation__link">Contact</a>
            </li>
            <li className="navigation__item">
                    <a href="#section-contact" className="navigation__link">Activity</a>
            </li>
        </ul>
    </nav>
  </div>
);

export default Nav;
