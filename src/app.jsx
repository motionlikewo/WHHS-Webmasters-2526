import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Home from './Pages/main-menu/home.jsx';
import MapPage from './Pages/map/map.jsx';
import About from './Pages/about/about.jsx';

function App() {
  const location = useLocation();
  const showFooter = location.pathname !== '/map';

  return (
    <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar /> 
      
      {/* The 'flex: 1' here is vital for the Map height calculation */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {showFooter && <Footer />}
    </div>
  );
}

export default App;