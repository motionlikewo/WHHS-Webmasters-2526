import React, { useState } from 'react';
import resources from '../../data/resources.json';
import './map.css';
import GoogleMap from './googleMap.jsx';

const MapPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  //gets unique categories for the dropdown
  const categories = ["All", ...new Set(resources.map(item => item.category))];

  //filter logic
  const filteredData = resources.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="page">
      <div className="filterContainer">
        <input 
          type="text" 
          placeholder="Search locations..." 
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <select 
          className="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
          ))}
        </select>
      </div>

      <div className="layout">
        <aside className="sidebar">
          <h3>Results ({filteredData.length})</h3>
          <div className="scroll-area">
            {filteredData.map(item => (
              <div key={item.id} className="resourceCard">
                <h4>{item.name}</h4>
                <p>{item.address}</p>
                <div className="card-meta">
                  <span className="badge">{item.category}</span>
                  <span className="rating">⭐ {item.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </aside>

          <div className="mapDisplay">
           <GoogleMap locations={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default MapPage;