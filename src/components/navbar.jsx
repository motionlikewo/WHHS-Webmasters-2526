import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    backgroundColor: 'var(--sun-blue)',
    color: 'white',
    padding: '1rem 0'
  };

  const linkStyle = { 
    color: 'white', 
    textDecoration: 'none', 
    marginLeft: '20px', 
    fontWeight: '500' 
  };

  return (
    <nav style={navStyle}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--sun-yellow)', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          {/* Removed <Sun /> to fix crash */}
          Sunshine Central
        </Link>
        <div>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/directory" style={linkStyle}>Resource Directory</Link>
          <Link to="/submit" style={linkStyle}>Submit Resource</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;