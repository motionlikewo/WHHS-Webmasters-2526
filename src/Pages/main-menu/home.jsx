import React from 'react';
import { resources } from '../../data/mockData';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  // Select first 3 resources for spotlight
  const spotlightResources = resources.slice(0, 3);

  return (
    <div className="home-page">
      <header className="home-hero">
        <div className="home-container">
          <h1>Connecting Florida Communities</h1>
          <p>
            Sunshine Central is your one-stop hub for non-profits, support services, and community events across the Sunshine State!
          </p>
          <Link to="/directory" className="btn-primary">Find Resources Now</Link>
        </div>
      </header>

      <section className="home-container spotlight-section">
        <h2 className="spotlight-title">
          Community Spotlights
        </h2>
        <div className="spotlight-grid">
          {spotlightResources.map(res => (
            <div key={res.id} className="spotlight-card">
              <h3 style={{ color: 'var(--sun-blue)', marginTop: 0 }}>{res.name}</h3>
              <span className="category-tag">{res.category}</span>
              <p>{res.description}</p>
              <Link to="/directory" className="view-details-link">View Details &rarr;</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mission-section">
        <div className="home-container mission-flex">
          <div className="mission-text">
            <h2 style={{ color: 'var(--sun-blue)' }}>Our Mission</h2>
            <p>
              Founded in 2026, Sunshine Central aims to bridge the gap between Florida residents and the vital services they need. 
              Whether you are looking for food security, youth education programs, or environmental volunteering, we are here to help.
            </p>
            <p><strong>Did you know?</strong> Florida has over 90,000 active non-profits. We help you find the right one.</p>
          </div>
          <div className="mission-card-cta">
            <h3>Need to list a service?</h3>
            <p>Help us grow our directory by submitting local organizations.</p>
            <Link to="/submit" className="submission-link">Go to Submission Form &rarr;</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;