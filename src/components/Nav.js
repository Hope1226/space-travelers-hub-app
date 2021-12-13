import React from "react";
import Logo from '../assets/images/logo.png';
import '../assets/stylesheets/nav.css';

const Nav = () => (
  <nav>
    <div className="logo-cont">
      <img src={Logo} alt="logo" />
      <h1 className="hero-txt">Space Travelers' Hub</h1>
    </div>
    <ul>
      <li>Rockets</li>
      <li>Missions</li>
      <li>My profile</li>
    </ul>
  </nav>
);

export default Nav;