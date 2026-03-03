import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import GoogleMap from './googleMap.jsx';
import './map.css';

const MapPage = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [apiResults, setApiResults] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mapCenter, setMapCenter] = useState({ lat: 27.9944, lng: -81.7603 });
  const [isMapMoved, setIsMapMoved] = useState(false);

  const categories = ["All", "Shelter", "Food Bank", "Library", "Public Health", "Community Center"];

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    return () => { 
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    };
    
  }, []);

  const handleSearch = async (e, customCenter = null) => {
    if (e) e.preventDefault();
    if (!window.google) return;
    setIsLoading(true);
    setSelectedPlace(null);
    try {
      const { Place } = await window.google.maps.importLibrary("places");
      const categoryQuery = selectedCategory !== "All" ? selectedCategory : "community resource";
      const request = {
        textQuery: `${searchTerm} ${categoryQuery} Florida`.trim(),
        fields: ["id", "displayName", "location", "formattedAddress", "rating", "types"],
        locationBias: customCenter || mapCenter,
      };
      const { places } = await Place.searchByText(request);
      setApiResults(places || []);
      setIsMapMoved(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="map-page-container">
      <aside className="map-sidebar">
        <div className="search-box-container">
          <form onSubmit={handleSearch}>
            <div className="search-input-row">
              <input 
                className="sidebar-search-input"
                placeholder="Search..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select 
                className="sidebar-category-select"
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
            <button type="submit" className="sidebar-submit-btn">
              {isLoading ? "Searching..." : "Search Florida"}
            </button>
          </form>
        </div>

        <div className="sidebar-results-area">
          {selectedPlace ? (
            <div className="place-detail-view">
              <button className="back-to-results-btn" onClick={() => setSelectedPlace(null)}>← Back</button>
              <div className="detail-card-inner">
                <h3>{selectedPlace.displayName}</h3>
                <p>{selectedPlace.formattedAddress}</p>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedPlace.displayName)}&query_place_id=${selectedPlace.id}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="google-maps-link-btn"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          ) : (
            <>
              <p className="results-status-text">Results ({apiResults.length})</p>
              {apiResults.map(item => (
                <div key={item.id} className="sidebar-result-card" onClick={() => setSelectedPlace(item)}>
                  <h4>{item.displayName}</h4>
                  <p>{item.formattedAddress}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </aside>

      <main className="map-main-display">
        {isMapMoved && !selectedPlace && (
          <button className="search-here-btn" onClick={() => handleSearch(null, mapCenter)}>
            Search this area
          </button>
        )}
        <div className="google-map-container">
          <GoogleMap 
            apiResults={apiResults} 
            selectedPlace={selectedPlace} 
            onSelectPlace={setSelectedPlace} 
            onBoundsChange={(c) => { setMapCenter(c); setIsMapMoved(true); }}
            center={mapCenter}
          />
        </div>
      </main>
    </div>
  );
};

export default MapPage;