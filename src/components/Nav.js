import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import Menu from '../assets/images/menu-icon.svg';

import '../assets/stylesheets/nav.css';

const Nav = () => {
  const [mobMenuOpen, setMobMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobMenuOpen(!mobMenuOpen);
    console.log(mobMenuOpen);
  };

  return (
    <nav>
      <div className="logo-cont">
        <img src={Logo} alt="logo" />
        <h1 className="hero-txt">Space Travelers&apos; Hub</h1>
      </div>
      <button type="button" onClick={toggleMenu} className="mob-only mob-menu"><img src={Menu} alt="menu" /></button>
      <div className={`nav-links ${mobMenuOpen ? 'open-mob-nav' : ''}`}>
        <NavLink to="/" className="nav-link">Rockets</NavLink>
        <NavLink to="/missions" className="nav-link">Missions</NavLink>
        <NavLink to="/profile" className="nav-link">Profile</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
