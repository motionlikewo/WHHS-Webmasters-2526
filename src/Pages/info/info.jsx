import React from 'react';
import './info.css';

const infoPage = () => {
  return (
    <div className="info-page">
      <div className="info-container">
        <h1 className="info-main-title">Disaster Preparedness</h1>

        <section className="hurricane-section">
          <div className="disaster-header hurricane">
            <h2>🌀 Hurricane Safety</h2>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <h3>Before</h3>
              <ul>
                <li>Build an emergency kit (3 days of water/food).</li>
                <li>Identify your evacuation zone.</li>
                <li>Clear gutters and secure outdoor furniture.</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>During</h3>
              <ul>
                <li>Stay indoors away from windows.</li>
                <li>Listen to local weather updates (NOAA radio).</li>
                <li>Turn refrigerator to coldest setting.</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>After</h3>
              <ul>
                <li>Watch for downed power lines.</li>
                <li>Avoid walking or driving through floodwaters.</li>
                <li>Check on neighbors via text to save battery.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="fire-section">
          <div className="disaster-header wildfire">
            <h2>🔥 Wildfire Safety</h2>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <h3>Before</h3>
              <ul>
                <li>Create a 30ft "defensible space" around your home.</li>
                <li>Keep a list of emergency contacts.</li>
                <li>Designate an out-of-area meeting place.</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>During</h3>
              <ul>
                <li>Evacuate immediately if told to do so.</li>
                <li>Close all windows and doors to keep out smoke.</li>
                <li>Turn on lights to help rescuers see your home.</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>After</h3>
              <ul>
                <li>Wait for officials to say it's safe to return.</li>
                <li>Watch for hot spots or smoldering debris.</li>
                <li>Discard food exposed to heat or smoke.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="thunderstorm-section">
          <div className="disaster-header storm">
            <h2>⚡ Thunderstorm Safety</h2>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <h3>Before</h3>
              <ul>
                <li>Check the forecast and look for darkening skies.</li>
                <li>Unplug sensitive electronics to protect from surges.</li>
                <li>Bring pets inside and secure loose outdoor objects.</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>During</h3>
              <ul>
                <li>When thunder roars, go indoors!</li>
                <li>Avoid using corded phones or running water.</li>
                <li>If caught outside, stay away from tall trees or poles.</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>After</h3>
              <ul>
                <li>Wait 30 mins after the last clap of thunder to go out.</li>
                <li>Stay away from flooded areas and downed wires.</li>
                <li>Help neighbors if it is safe to do so.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default infoPage;