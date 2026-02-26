import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SubmitPage from './Pages/submit/submit.jsx';

function App() {
  return (
    <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/submit" element={<SubmitPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;