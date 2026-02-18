import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          Sunshine Central
        </Link>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/directory">Featued</Link>
          <Link to="/map">Map</Link>
          <Link to="/submit">Submit Resource</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;