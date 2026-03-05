import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import logo from '../assets/sunshineCentralLogo.png';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <Link to="/" className="footer-content">
          <img src={logo} alt="Sunshine Central Logo" className="footer-logo" />
          <span className="footer-site-name">Sunshine Central</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;