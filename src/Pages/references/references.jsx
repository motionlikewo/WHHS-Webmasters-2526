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
        <ul className="links-list">
          <li>
            <span>Florida Outline with Flag: </span>
            <a href="https://pixabay.com/vectors/florida-flag-map-usa-america-890553/" target="_blank" rel="noreferrer">
              pixabay.com/vectors/florida-flag-map-usa-america-890553/
            </a>
          </li>
          <li>
            <span>Sun: </span>
            <a href="https://www.vecteezy.com/free-png/sun-free-png" target="_blank" rel="noreferrer">
              www.vecteezy.com/free-png/sun-free-png
            </a>
          </li>
          <li>
            <span>Florida Seal: </span>
            <a href="https://pixabay.com/vectors/seal-state-florida-usa-tree-palm-40650/" target="_blank" rel="noreferrer">
              pixabay.com/vectors/seal-state-florida-usa-tree-palm-40650/
            </a>
          </li>
          <li>
            <span>Google Maps JavaScript API: </span>
            <a href="https://developers.google.com/maps/documentation/javascript" target="_blank" rel="noreferrer">
              developers.google.com/maps/documentation/javascript
            </a>
          </li>
          <li>
            <span>Google Maps Places API (New): </span>
            <a href="https://developers.google.com/maps/documentation/places/web-service" target="_blank" rel="noreferrer">
              developers.google.com/maps/documentation/places/web-service
            </a>
          </li>
          <li>
            <span>Vercel: </span>
            <a href="https://vercel.com/docs" target="_blank" rel="noreferrer">
              vercel.com/docs
            </a>
          </li>
        </ul>
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