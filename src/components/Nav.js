import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import '../assets/stylesheets/nav.css';

const Nav = () => (
  <nav>
    <div className="logo-cont">
      <img src={Logo} alt="logo" />
      <h1 className="hero-txt">Space Travelers&apos; Hub</h1>
    </div>
    <div className="nav-links">
      <NavLink to="/" className="nav-link">Rockets</NavLink>
      <NavLink to="/missions" className="nav-link">Missions</NavLink>
      <NavLink to="/profile" className="nav-link">Profile</NavLink>
    </div>
  </nav>
);

export default Nav;
