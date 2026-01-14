import React from 'react';

const NarrativeView = ({ activeZone }) => {
  const zones = ["Perimeter", "Hallway", "Control Room", "Vault"];
  return (
    <div className="view-pane">
      <h2>Domain-Specific Narrative Model</h2>
      <div className="map-grid">
        {zones.map(z => (
          <div key={z} className={`zone ${activeZone === z ? 'active' : ''}`}>
            {z}
            {activeZone === z && <div className="pulse"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};
export default NarrativeView;
