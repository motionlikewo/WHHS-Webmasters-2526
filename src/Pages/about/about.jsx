import React from 'react';
import './about.css';
import missionImage from '../../assets/missionimage.jpg';
import rootImage from '../../assets/rootimage.jpg';
import futureImage from '../../assets/futureimage.jpg';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-main-title">About Sunshine Central</h1>

        <section className="about-section">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              Sunshine Central was founded with a single goal: to ensure that no Floridian 
              is left without a lifeline during times of need. Our mission is to bridge the 
              gap between those seeking help and the vital community resources such as food banks, 
              shelters, and center that make our state a more resilient place for everyone.
            </p>
          </div>
          <div className="about-image">
            <img src={missionImage} alt="One person helping another climb a mountain." />
          </div>
        </section>

        <section className="about-section reverse">
          <div className="about-text">
            <h2>Rooted in Community</h2>
            <p>
              Founded from members who grew up in the Sunshine State, we realized that while thousands of 
              non-profits and government programs exist, finding them in a moment of 
              crisis can be challenging. Sunshine Central aids the Florida community in this journey 
              by centralizing verified data into an accessible map interface 
              designed for its users.
            </p>
          </div>
          <div className="about-image">
            <img src={rootImage} alt="Community of modern houses." />
          </div>
        </section>

        <section className="about-section">
          <div className="about-text">
            <h2>Looking Ahead</h2>
            <p>
              We are constantly expanding our database and refining our methods to 
              provide real time information and more localized and accurate results. By arming citizens 
              with the information of the resources around them, we believe we can build a stronger Florida where help 
              is only just a click away.
            </p>
          </div>
          <div className="about-image">
            <img src={futureImage} alt="Computer with code on it." />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;