import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Home from './Pages/home.jsx';
import Directory from './Pages/directory.jsx';
import SubmitResource from './Pages/submit.jsx';

function App() {
  return (
    <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
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
  );
}

export default App;