// src/pages/SubmitResource.js
import React, { useState } from 'react';

const SubmitResource = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    location: '',
    description: '',
    contact: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to a backend/API
    console.log("Submitted Resource:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h2 style={{ color: 'var(--sun-green)' }}>Thank You!</h2>
        <p>Your resource has been submitted for review by the Sunshine Central team.</p>
        <button className="btn-primary" onClick={() => setSubmitted(false)}>Submit Another</button>
      </div>
    );
  }

  return (
    <div className="container" style={{ maxWidth: '600px' }}>
      <h1 style={{ color: 'var(--sun-blue)', textAlign: 'center' }}>Submit a Resource</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        Know of a service that helps Florida residents? Fill out the form below to add it to our directory.
      </p>

      <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
        <label>Organization Name</label>
        <input type="text" name="name" required value={formData.name} onChange={handleChange} />

        <label>Category (e.g., Food, Health, Education)</label>
        <select name="category" required value={formData.category} onChange={handleChange}>
          <option value="">Select a Category...</option>
          <option value="Food Assistance">Food Assistance</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
          <option value="Environment">Environment</option>
          <option value="Other">Other</option>
        </select>

        <label>City/Location</label>
        <input type="text" name="location" placeholder="e.g. Orlando" required value={formData.location} onChange={handleChange} />

        <label>Contact Phone/Email</label>
        <input type="text" name="contact" required value={formData.contact} onChange={handleChange} />

        <label>Description of Services</label>
        <textarea name="description" rows="4" required value={formData.description} onChange={handleChange}></textarea>

        <button type="submit" className="btn-primary" style={{ width: '100%' }}>Submit Resource</button>
      </form>
    </div>
  );
};

export default SubmitResource;