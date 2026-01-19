import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Home from './Pages/home.jsx';
import Directory from './Pages/directory.jsx';
import SubmitResource from './Pages/submit.jsx';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper" style={{ minHeight: '100vh'}}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/submit" element={<SubmitResource />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;