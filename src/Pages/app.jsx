import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          /*Define your routes here*/
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;