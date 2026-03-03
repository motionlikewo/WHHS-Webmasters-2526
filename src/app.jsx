import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Home from './Pages/main-menu/home.jsx';
import MapPage from './Pages/map/map.jsx';
import About from './Pages/about/about.jsx';
import Info from './Pages/info/info.jsx';
import SubmitPage from './Pages/submit/submit.jsx';

function App() {
  const location = useLocation();
  const showFooter = location.pathname !== '/map';

  return (
    <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar /> 

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/submit" element={<SubmitPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/info" element={<Info />} />  
        </Routes>
      </main>

      {showFooter && <Footer />}
      <Analytics />
    </div>
  );
}

export default App;