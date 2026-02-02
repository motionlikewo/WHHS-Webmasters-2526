// src/pages/Directory.js
import React, { useState } from 'react';
import { resources } from '../data/mockData';

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [cityFilter, setCityFilter] = useState('All');

  // Extract unique categories and cities for dropdowns
  const categories = ['All', ...new Set(resources.map(r => r.category))];
  const cities = ['All', ...new Set(resources.map(r => r.location))];

  // Filter Logic
  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || resource.category === categoryFilter;
    const matchesCity = cityFilter === 'All' || resource.location === cityFilter;

    return matchesSearch && matchesCategory && matchesCity;
  });

  return (
    <div className="container">
      <h1 style={{ color: 'var(--sun-blue)', margin: '30px 0' }}>Community Resource Directory</h1>

      {/* Search and Filters Bar */}
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          <div>
            <label><strong>Search</strong></label>
            <input 
              type="text" 
              placeholder="Search by name or keyword..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <label><strong>Filter by Category</strong></label>
            <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
          <div>
            <label><strong>Filter by City</strong></label>
            <select value={cityFilter} onChange={(e) => setCityFilter(e.target.value)}>
              {cities.map(city => <option key={city} value={city}>{city}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Results List */}
      <div style={{ display: 'grid', gap: '20px' }}>
        {filteredResources.length > 0 ? (
          filteredResources.map(res => (
            <div key={res.id} style={{ backgroundColor: 'white', padding: '25px', borderRadius: '8px', borderLeft: '5px solid var(--sun-blue)', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div>
                  <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{res.name}</h3>
                  <span style={{ backgroundColor: '#e0f2fe', color: 'var(--sun-blue)', padding: '4px 10px', borderRadius: '15px', fontSize: '0.85rem' }}>
                    {res.category}
                  </span>
                </div>
                <div style={{ textAlign: 'right', minWidth: '150px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', color: '#666', marginBottom: '5px' }}>
                    <MapPin size={16} style={{ marginRight: '5px' }} /> {res.location}, FL
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', color: 'var(--sun-green)', fontWeight: 'bold' }}>
                    <Phone size={16} style={{ marginRight: '5px' }} /> {res.phone}
                  </div>
                </div>
              </div>
              <p style={{ marginTop: '15px', lineHeight: '1.6' }}>{res.description}</p>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '50px', color: '#666' }}>
            <h3>No resources found matching your criteria.</h3>
            <button 
              className="btn-primary" 
              onClick={() => {setSearchTerm(''); setCategoryFilter('All'); setCityFilter('All');}}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Directory;