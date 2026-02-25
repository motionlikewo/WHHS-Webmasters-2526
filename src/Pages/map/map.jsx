import React, { useState, useCallback } from 'react';
import './map.css';
import '../../../index.css'
import GoogleMap from './googleMap.jsx';
import { Link } from 'react-router-dom';

const MapPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [apiResults, setApiResults] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const categories = ["All", "Restaurant", "Park", "Library", "Hotel", "Museum"];
  const hasSearched = searchTerm.trim().length > 0 || selectedCategory !== "All";

  const handleResultsUpdate = useCallback((results) => {
    setApiResults(results);
    setIsLoading(false);
    setSelectedPlace(null);
  }, []);

  const handleSelectPlace = useCallback((place) => {
    setSelectedPlace(place);
  }, []);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.trim().length > 2) setIsLoading(true);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setIsLoading(true);
  };

  return (
    <div className="page">
      <header className="headerContainer">
        <div className="navButtons">
          <Link to="/"><button className="navBtn">Home</button></Link>
          <button className="navBtn active">Map</button>
        </div>

        <div className="searchContainer">
          <input 
            type="text" 
            placeholder="Search Florida..." 
            className="searchInput"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button className="searchBtn">Search</button>
        </div>

        <div className="filterDropdownContainer">
          <select 
            className="category-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </header>

      <div className="content">
        <aside className="sidebar">
          {selectedPlace ? (
            <div className="detailContainer">
              <button className="backBtn" onClick={() => setSelectedPlace(null)}>
                ← Back to Results
              </button>
              <div className="detailCard">
                <h2 className="resultTitle">{selectedPlace.displayName}</h2>
                <p className="resultAddress">{selectedPlace.formattedAddress}</p>
                <div className="detailInfo">
                  <span className="badge">⭐ {selectedPlace.rating || "N/A"}</span>

                  {selectedPlace.nationalPhoneNumber && (
                    <p className="contactItem">📞 {selectedPlace.nationalPhoneNumber}</p>
                  )}
                  
                  {selectedPlace.websiteUri && (
                    <div style={{ marginTop: '1rem' }}>
                      <a href={selectedPlace.websiteUri} target="_blank" rel="noreferrer" className="siteLink">
                        🌐 Visit Website
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <>
              <h3 className="sidebarTitle">Results ({apiResults.length})</h3>
              <div className="scroll-area">
                {isLoading ? (
                  <p style={{ padding: '20px', textAlign: 'center' }}>Searching...</p>
                ) : apiResults.length > 0 ? (
                  apiResults.map(item => (
                    <div key={item.id} className="resultCard" onClick={() => handleSelectPlace(item)}>
                      <h4 className="resultTitle">{item.displayName}</h4>
                      <p className="resultAddress">{item.formattedAddress}</p>
                      <div className="card-meta">
                        <span className="badge">{selectedCategory}</span>
                        <span className="rating">⭐ {item.rating || "N/A"}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="empty-state-message">
                    <p style={{ padding: '20px', color: '#666', textAlign: 'center' }}>
                      {hasSearched ? "No locations found." : "Enter a search term to explore Florida."}
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </aside>

        <main className="mapDisplay">
          <GoogleMap 
            searchTerm={searchTerm} 
            selectedCategory={selectedCategory} 
            selectedPlace={selectedPlace}
            onResultsUpdate={handleResultsUpdate}
            onSelectPlace={handleSelectPlace}
          />
        </main>
      </div>
    </div>
  );
};

export default MapPage;