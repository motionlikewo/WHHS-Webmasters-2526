import React from 'react';

const Navbar = () => {
  const navStyle = {
    backgroundColor: 'var(--sun-blue)',
    color: 'white',
    padding: '1rem 0'
  };

  const linkStyle = { color: 'white', textDecoration: 'none', marginLeft: '20px', fontWeight: '500' };

  return (
    <nav style={navStyle}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--sun-yellow)', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Sun style={{ marginRight: '10px' }} /> Sunshine Central
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