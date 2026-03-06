import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/sunshineCentralLogo.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="" className="logo-img" />
          <span className="logo-text">Sunshine Central</span>
        </Link>
        <div className="links">
          <NavLink to="/" className="nav-link" end>Home</NavLink>
          <NavLink to="/map" className="nav-link">Map</NavLink>
          <NavLink to="/submit" className="nav-link">Submit Resource</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/info" className="nav-link">Disaster Info</NavLink>
          <NavLink to="/references" className="nav-link">References</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;