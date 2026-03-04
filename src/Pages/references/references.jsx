import React, { useState } from 'react';
import './references.css';

const ReferencesPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Sources of Information",
      content: (
        <div className="sources-list">
          <h3>Image Sources</h3>
          <div className="source-item">
            <a href="https://pixabay.com/users/sasint-3639875/" target="_blank" rel="noreferrer">
              Person helping another climb a mountain. Image by sasint - Pixabay
            </a>
          </div>  

          <div className="source-item">
            <a href="https://pixabay.com/users/rickbella-11598335/" target="_blank" rel="noreferrer">
              Community full of modern houses. Image by rickbella - Pixabay
            </a>
          </div>

          <div className="source-item">
            <a href="https://pixabay.com/users/pexels-2286921/" target="_blank" rel="noreferrer">
              Computer screen with code on it. Image by Pexels - Pixabay
            </a>
          </div>
          
          <h3>Icon Sources</h3>
          <div className="source-item">
            <a href="https://pixabay.com/users/kjrstie-547995/" target="_blank" rel="noreferrer">
              Florida Outline with Flag. Image by kjrstie - Pixabay
            </a>
          </div>

          <div className="source-item">
            <a href="https://www.vecteezy.com/members/kinggod" target="_blank" rel="noreferrer">
              Sun drawing. Image by King God. - Vecteezy
            </a>
          </div>
      
          <div className="source-item">
            <a href="https://pixabay.com/users/clker-free-vector-images-3736/" target="_blank" rel="noreferrer">
              Florida Seal. Image by Clker-Free-Vector-Images - Pixabay
            </a>
          </div>

          <h3>Code Sources</h3>
          <div className="source-item">
            <a href="https://developers.google.com/maps/documentation/javascript" target="_blank" rel="noreferrer">
              Google Maps JavaScript API. - Google
            </a>
          </div>

          <div className="source-item">
            <a href="https://developers.google.com/maps/documentation/places/web-service" target="_blank" rel="noreferrer">
              Google Maps Places API (New). - Google
            </a>
          </div>

          <div className="source-item">
            <a href="https://vercel.com/docs" target="_blank" rel="noreferrer">
              Vercel Hosting, Web, and Speed Analytics. - Vercel
            </a>
          </div>
        </div>
  )
    },

    {
      title: "Student Copyright Checklist",
      content: (
        <>
          <p>Click the link below to view the completed Copyright Checklist PDF:</p>
          <a href="/assets/copyrightchecklist.pdf" className="pdf-link" target="_blank" rel="noreferrer">
            📄 View Copyright Checklist (PDF)
          </a>
        </>
      )
    },
    
    {
      title: "Work Log",
      content: (
        <>
          <p>Click the link below to view the detailed Plan of Work Log PDF:</p>
          <a href="/assets/worklog.pdf" className="pdf-link" target="_blank" rel="noreferrer">
            📄 View Work Log (PDF)
          </a>
        </>
      )
    }
  ];

  return (
    <div className="references-page">
      <div className="references-container">
        <h1 className="references-heading">Reference Page</h1>
        <div className="accordion-group">
          {sections.map((section, index) => (
            <div 
              key={index} 
              className={`reference-box ${openIndex === index ? 'is-open' : ''}`}
            >
              <div className="box-header" onClick={() => handleToggle(index)}>
                {section.title}
              </div>
              <div className="box-content-wrapper">
                <div className="box-content">
                  {section.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReferencesPage;