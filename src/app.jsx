import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Home from './Pages/main-menu/home.jsx';
//import SubmitPage from './Pages/submit/submit.jsx'; placeholders until pull request
//import MapPage from './Pages/map/map.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<h1>Map Page</h1>} />
            <Route path="/submit" element={<div><h1>Submit Resource</h1></div>} />
            <Route path="/info" element={<div><h1>Important Info</h1></div>} />
            <Route path="/about" element={<div><h1>About Page</h1></div>} />
            <Route path="/references" element={<div><h1>References Page</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;