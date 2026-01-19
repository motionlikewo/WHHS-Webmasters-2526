// src/pages/Home.js
import React from 'react';
import { resources } from '../data/mockData';

const Home = () => {
  // Select first 3 resources for spotlight
  const spotlightResources = resources.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <header style={{ backgroundColor: 'var(--sun-yellow)', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'var(--sun-blue)', fontSize: '3rem' }}>Connecting Florida Communities</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '20px auto' }}>
            Sunshine Central is your one-stop hub for non-profits, support services, and community events across the Sunshine State!
          </p>
          <Link to="/directory" className="btn-primary">Find Resources Now</Link>
        </div>
      </header>

      {/* Spotlight Section */}
      <section className="container" style={{ padding: '40px 20px' }}>
        <h2 style={{ color: 'var(--sun-green)', borderBottom: '2px solid var(--sun-green)', paddingBottom: '10px' }}>
          Community Spotlights
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
          {spotlightResources.map(res => (
            <div key={res.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', backgroundColor: 'white', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: 'var(--sun-blue)' }}>{res.name}</h3>
              <span style={{ backgroundColor: 'var(--sun-yellow)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>{res.category}</span>
              <p>{res.description}</p>
              <Link to="/directory" style={{ color: 'var(--sun-green)', fontWeight: 'bold', textDecoration: 'none' }}>View Details &rarr;</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Content: Mission */}
      <section style={{ backgroundColor: '#e9f5e9', padding: '50px 0' }}>
        <div className="container" style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ color: 'var(--sun-blue)' }}>Our Mission</h2>
            <p>
              Founded in 2026, Sunshine Central aims to bridge the gap between Florida residents and the vital services they need. 
              Whether you are looking for food security, youth education programs, or environmental volunteering, we are here to help.
            </p>
            <p><strong>Did you know?</strong> Florida has over 90,000 active non-profits. We help you find the right one.</p>
          </div>
          <div style={{ flex: 1, backgroundColor: 'var(--sun-blue)', color: 'white', padding: '30px', borderRadius: '10px' }}>
            <h3>Need to list a service?</h3>
            <p>Help us grow our directory by submitting local organizations.</p>
            <Link to="/submit" style={{ color: 'var(--sun-yellow)', fontWeight: 'bold' }}>Go to Submission Form &rarr;</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;