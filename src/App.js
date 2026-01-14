import React, { useState } from 'react';
import NarrativeView from './components/NarrativeView';
import ForensicView from './components/ForensicView';
import scenarioData from './data/scenario.json';
import './index.css';

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [viewMode, setViewMode] = useState('Narrative'); // Narrative vs Forensic

  const nextStep = () => {
    if (currentStep < scenarioData.length - 1) setCurrentStep(currentStep + 1);
  };

  return (
    <div className="app-container">
      <header>
        <div className="title-block">
          <h1>ISOCORE</h1>
          <span>Isomorphic Causal Provenance Framework</span>
        </div>
        <div className="mode-toggle">
          <button onClick={() => setViewMode('Narrative')} className={viewMode === 'Narrative' ? 'active' : ''}>NARRATIVE VIEW</button>
          <button onClick={() => setViewMode('Forensic')} className={viewMode === 'Forensic' ? 'active' : ''}>FORENSIC VIEW (CPG)</button>
        </div>
      </header>

      <main>
        {viewMode === 'Narrative' ? (
          <NarrativeView activeZone={scenarioData[currentStep].zone} />
        ) : (
          <ForensicView event={scenarioData[currentStep]} />
        )}

        <div className="story-feed">
          <h3>Causal Trace Log</h3>
          {scenarioData.slice(0, currentStep + 1).reverse().map(e => (
            <div key={e.id} className={`log-card ${e.severity}`}>
              <strong>{e.timestamp}</strong>: {viewMode === 'Narrative' ? e.isomorphic_mapping : e.tech_log}
            </div>
          ))}
        </div>
      </main>

      <footer>
        <button className="trigger-btn" onClick={nextStep}>Inject Next Causal Event</button>
        <div className="status">Active Layer: {scenarioData[currentStep].layer}</div>
      </footer>
    </div>
  );
}
