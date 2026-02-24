import React, { useState } from 'react';
import './map.css';
import '../../../index.css'
import GoogleMap from './googleMap.jsx';
import { Link } from 'react-router-dom';

const MapPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [apiResults, setApiResults] = useState([]);
  const categories = ["All", "Restaurant", "Park", "Library", "Hotel", "Museum"];

  const hasSearched = searchTerm.trim().length > 0 || selectedCategory !== "All";
  const handleResultsUpdate = (results) => {
    setApiResults(results);
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
            placeholder="Search Florida (e.g. Pizza in Miami)..." 
            className="searchInput"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="searchBtn">Search</button>
        </div>

        <div className="filterDropdownContainer">
          <select 
            className="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </header>

      <div className="content">
        <aside className="sidebar">
          <h3 className="sidebarTitle">Results ({apiResults.length})</h3>
          <div className="scroll-area">
            {apiResults.length > 0 ? (
              apiResults.map(item => (
                <div key={item.id} className="resultCard">
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
                  {hasSearched 
                    ? "Searching for live locations..." 
                    : "Enter a search term to explore Florida."}
                </p>
              </div>
            )}
          </div>
        </aside>

        <main className="mapDisplay">
          <GoogleMap 
            searchTerm={searchTerm} 
            selectedCategory={selectedCategory} 
            onResultsUpdate={handleResultsUpdate} 
          />
        </main>
      </div>
    </div>
  );
};

export default MapPage;