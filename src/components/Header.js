import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink exact to="/" activeStyle={{ background: 'tomato' }}>Home</NavLink></li>
      <li><NavLink exact to="/about" activeClassName="actyMcActiveFace">About</NavLink></li>
      <li><NavLink exact to="/teachers">Teachers</NavLink></li>
      <li><NavLink exact to="/courses">Courses</NavLink></li>
    </ul>    
  </header>
);

export default Header;