import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './submit.css';

const SubmitPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    hours: '',
    category: 'Shelter',
    description: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionData = {
      name: formData.name,
      category: formData.category,
      address: formData.address,
      description: formData.description,
      phone: formData.phone || "N/A", // Default if empty
      hours: formData.hours || "N/A", // Default if empty
      rating: 5,                      // Default rating for new submissions
      url: ""                         // Placeholder for URL
    };

    try {
      const response = await fetch('http://localhost:8080/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result.message);
        setIsSubmitted(true);
      } else {
        console.error("Server error:", response.status);
        alert("Failed to submit to database. Check server console.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Could not connect to the server. Is node server.js running?");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="wrapper">

      <main className="main">
        {!isSubmitted ? (
          <div className="card">
            <div className="header">
              <h2 className="header-h2">Add a New Location</h2>
              <p className="header-p">Help fellow Floridians find great local resources.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="resourceForm">
              <div className="formRow">
                <div className="formGroup">
                  <label className="formGroup-label">Place Name <span className="req">*</span></label>
                  <input 
                    className="formGroup-input"
                    type="text" 
                    name="name" 
                    required 
                    placeholder="Business Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="formGroup">
                  <label className="formGroup-label">Category</label>
                  <select className="formGroup-select" name="category" value={formData.category} onChange={handleChange}>
                    <option value="Shelter">Shelter</option>
                    <option value="Food Bank">Food Bank</option>
                    <option value="Library">Library</option>
                  </select>
                </div>
              </div>

              <div className="formGroup">
                <label className="formGroup-label">Address <span className="req">*</span></label>
                <input 
                  className="formGroup-input"
                  type="text" 
                  name="address" 
                  required 
                  placeholder="Street, City, FL"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="formRow">
                <div className="formGroup">
                  <label className="formGroup-label">Phone Number</label>
                  <input 
                    className="formGroup-input"
                    type="tel" 
                    name="phone" 
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="formGroup">
                  <label className="formGroup-label">Business Hours</label>
                  <input 
                    className="formGroup-input"
                    type="text" 
                    name="hours" 
                    placeholder="e.g. 9am - 5pm"
                    value={formData.hours}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="formGroup">
                <label className="formGroup-label">Additional Details</label>
                <textarea 
                  className="formGroup-textarea"
                  name="description" 
                  rows="2" 
                  placeholder="Tell us more about this place..."
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="action-btn">Submit for Review</button>
            </form>
          </div>
        ) : (
          <div className="confirmationCard">
            <div className="successIcon">✅</div>
            <h2>Submission Received</h2>
            <p>Your suggestion for <strong>{formData.name}</strong> will be reviewed by our team.</p>
            
            <div className="buttonGroup">
              <button className="reset-btn" onClick={() => setIsSubmitted(false)}>
                Submit Another
              </button>
              <Link to="/">
                <button className="reset-btn home-alt">
                  Return to Home
                </button>
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default SubmitPage;