import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GoogleMap from './googleMap.jsx';
import './map.css';

const MapPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [apiResults, setApiResults] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const categories = ["All", "Shelter", "Food Bank", "Library", "Public Health", "Community Center"];
  const forbiddenWords = ["burger", "king", "mcdonald", "restaurant", "grill", "shop", "boutique", "cafe", "bar", "pizza", "diner", "kia", "auto", "dealership", "store"];

  useEffect(() => {
    if (searchTerm.trim() === "" && selectedCategory === "All") {
      setApiResults([]);
      setSelectedPlace(null);
    }
  }, [searchTerm, selectedCategory]);

  const handleSearch = async (e) => {
    if (e) e.preventDefault();
    if (!window.google) return;

    setIsLoading(true);
    setSelectedPlace(null);

    try {
      const { Place } = await window.google.maps.importLibrary("places");
      const categoryQuery = selectedCategory !== "All" ? selectedCategory : "community resource";
      const fullQuery = `${searchTerm} ${categoryQuery} Florida`.trim();
      
      const request = {
        textQuery: fullQuery,
        fields: ["id", "displayName", "location", "formattedAddress", "rating", "types"],
        locationBias: { lat: 27.9944, lng: -81.7603 }, 
      };

      const { places } = await Place.searchByText(request);

      if (places && places.length > 0) {
        const filtered = places.filter(place => {
          const name = (place.displayName || "").toLowerCase();
          const types = place.types || [];
          return !forbiddenWords.some(word => name.includes(word)) && 
                 !types.some(t => ["restaurant", "food", "car_dealer", "store"].includes(t));
        });
        setApiResults(filtered);
      } else {
        setApiResults([]);
      }
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectPlace = (place) => {
    setSelectedPlace(place);
  };

  const getDisplayTag = (types) => {
    if (!types || types.length === 0) return "Resource";
    const importantTypes = ["shelter", "library", "hospital", "school", "park", "church", "community_center"];
    const found = types.find(t => importantTypes.includes(t));
    const rawTag = found || types[0];
    return rawTag.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <div className="page">
      <header className="headerContainer">
        <div className="navButtons">
          <Link to="/"><button className="navBtn">Home</button></Link>
          <Link to="/map"><button className="navBtn activeNav">Map</button></Link>
          <Link to="/about"><button className="navBtn">About</button></Link>
          <Link to="/info"><button className="navBtn">Important Info</button></Link>
          <Link to="/references"><button className="navBtn">References</button></Link>
        </div>
        
        <form className="searchContainer" onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Search Florida resources..." 
            className="searchInput"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="searchBtn">Search</button>
        </form>

        <div className="filterGroup">
          <label className="filterLabel">Category</label>
          <div className="filterWrapper">
            <select 
              className="categorySelect" 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
        </div>
      </header>

      <div className="content">
        <aside className="sidebar">
          {selectedPlace ? (
            <div className="detailContainer">
              <button className="backBtn" onClick={() => setSelectedPlace(null)}>← Back to Results</button>
              <div className="detailCard">
                <h2 className="detailTitle">{selectedPlace.displayName}</h2>
                <div className="ratingSection">
                  <span className="starLabel">⭐ {selectedPlace.rating ? `${selectedPlace.rating} / 5` : "No rating"}</span>
                </div>
                <p className="detailAddress">📍 {selectedPlace.formattedAddress}</p>
                
                <div className="infoSection">
                  <h4>More Information</h4>
                  <p>View this location directly on Google Maps for more information such as hours, photos, and contact info.</p>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedPlace.displayName)}&query_place_id=${selectedPlace.id}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="siteLinkBtn"
                  >
                    View on Google Maps
                  </a>
                </div>

                <div className="detailTag">
                  {getDisplayTag(selectedPlace.types)}
                </div>
              </div>
            </div>
          ) : (
            <div className="scroll-area">
              <h3 className="sidebarTitle">Resource Results ({apiResults.length})</h3>
              {isLoading ? <p className="loadingText">Searching...</p> : 
                apiResults.length > 0 ? apiResults.map(item => (
                  <div key={item.id} className="resultCard" onClick={() => handleSelectPlace(item)}>
                    <h4 className="resultTitle">{item.displayName}</h4>
                    <p className="resultAddress">{item.formattedAddress}</p>
                  </div>
                )) : <p className="emptyText">Enter a search to find community resources.</p>
              }
            </div>
          )}
        </aside>

        <main className="mapDisplay">
          <GoogleMap 
            apiResults={apiResults} 
            selectedPlace={selectedPlace} 
            onSelectPlace={handleSelectPlace} 
          />
        </main>
      </div>
    </div>
  );
};

export default MapPage;