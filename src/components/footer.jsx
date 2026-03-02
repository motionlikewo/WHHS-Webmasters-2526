import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', padding: '20px 0', marginTop: 'auto' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p>&copy;Sunshine Central Community Hub</p>
        <p style={{ fontSize: '0.8rem', color: '#aaa' }}>
          Created for the 2026 FLTSA Conference. 
          <br/>This website is a student project.
        </p>
      </div>
    </footer>
  );
};

export default Footer;