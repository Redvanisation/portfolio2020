import React, { Component } from 'react';

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
              <input type="checkbox" className="navigation__checkbox" id="navi-toggle" onClick={this.showHideMenu} checked={checked ? true : false} />
              <label htmlFor="navi-toggle" className="navigation__button">
                  <span className="navigation__icon">&nbsp;</span>
              </label>
          
              <div className="navigation__background">&nbsp;</div>
          
              <nav className="navigation__nav" onClick={this.showHideMenu}>
                  <ul className="navigation__list">
                      <li className="navigation__item">
                          <a href="#home" className="navigation__link" onClick={this,this.showHideMenu}>Home</a>
                      </li>
                      <li className="navigation__item">                    
                          <a href="#projects" className="navigation__link" onClick={this,this.showHideMenu}>Projects</a>
                      </li>
                      <li className="navigation__item">
                              <a href="#contact" className="navigation__link" onClick={this,this.showHideMenu}>Contact</a>
                      </li>
                      <li className="navigation__item">
                              <a href="#activity" className="navigation__link" onClick={this,this.showHideMenu}>Activity</a>
                      </li>
                  </ul>
              </nav>
            </div>
          );
          
    }
} 


export default Nav;
