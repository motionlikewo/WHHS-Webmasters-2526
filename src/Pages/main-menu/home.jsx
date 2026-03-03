import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  const [featuredResources, setFeaturedResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSpotlights = async () => {
      if (!window.google || !window.google.maps) {
        console.warn("Google Maps script not detected.");
        return;
      }
      
      try {
        const { Place } = await window.google.maps.importLibrary("places");

        const request = {
          textQuery: "Highly rated non-profits and community services in Florida",
          fields: ["id", "displayName", "formattedAddress", "rating", "types"],
          maxResultCount: 3,
        };

        const { places } = await Place.searchByText(request);
        
        if (places && places.length > 0) {
          setFeaturedResources(places);
        }
      } catch (error) {
        console.error("Failed to fetch spotlights:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const timer = setTimeout(fetchSpotlights, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getDisplayTag = (types) => {
    if (!types || types.length === 0) return "RESOURCE";
    const important = ["charity", "organization", "social_service", "education", "health"];
    const found = types.find(t => important.includes(t));
    return (found || types[0]).replace(/_/g, ' ').toUpperCase();
  };

  return (
    <div className="home-page">
      <header className="home-hero">
        <div className="home-container">
          <h1>Connecting Florida Communities</h1>
          <p>
            Sunshine Central is your one-stop hub for non-profits, support services, and community events across the Sunshine State!
          </p>
          <Link to="/map" className="btn-primary">Find Resources Now</Link>
        </div>
      </header>

      <section className="home-container spotlight-section">
        <h2 className="spotlight-title">Community Spotlights</h2>
        <div className="spotlight-grid">
          {isLoading ? (
            <div className="loading-container">
              <p>Fetching local resources...</p>
            </div>
          ) : (
            featuredResources.map(res => (
              <div key={res.id} className="spotlight-card">
                <span className="category-tag">{getDisplayTag(res.types)}</span>
                <h3>{res.displayName}</h3>
                <p className="spotlight-rating">
                  {res.rating ? `⭐ ${res.rating} / 5` : "⭐ Highly Rated"}
                </p>
                <p className="address-text">{res.formattedAddress}</p>
                
                <Link to={`/map?placeId=${res.id}`} className="view-details-link">
                  View on Map &rarr;
                </Link>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="mission-section">
        <div className="home-container mission-flex">
          <div className="mission-text">
            <h2>Our Mission</h2>
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