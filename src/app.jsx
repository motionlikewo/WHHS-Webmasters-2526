import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/about/about.jsx';

function App() {
  return (
    <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;