import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MapPage from './Pages/map/map.jsx';

//temp main menu
const Home = () => (
  <div style={{ padding: '40px', textAlign: 'center' }}>
    <h1>Sunshine Central</h1>
    <p>Welcome! Click below to view our resource map.</p>
    <Link to="/map" style={{ fontSize: '1.2rem', color: 'blue' }}>Go to Map</Link>
  </div>
);

function App() {
  return (
    <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;