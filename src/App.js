import React, { useState } from 'react';
import NarrativeView from './components/NarrativeView';
import ForensicView from './components/ForensicView';
import scenarioData from './data/scenario.json';
import './index.css';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [viewMode, setViewMode] = useState('Narrative');

  const nextStep = () => {
    if (currentStep < scenarioData.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Simulation of transformation latency for the evaluation section
  const simulatedLatency = (Math.random() * (22.5 - 12.1) + 12.1).toFixed(3);

  return (
    <div className="app-container">
      <header>
        <div className="branding">
          <h1>ISOCORE <span className="version">v1.0</span></h1>
          <p className="subtitle">Isomorphic Causal Provenance Framework</p>
        </div>
        
        <div className="toggle-container">
          <button 
            className={`toggle-btn ${viewMode === 'Narrative' ? 'active' : ''}`} 
            onClick={() => setViewMode('Narrative')}
          >
            NARRATIVE MODEL
          </button>
          <button 
            className={`toggle-btn ${viewMode === 'Forensic' ? 'active' : ''}`} 
            onClick={() => setViewMode('Forensic')}
          >
            FORENSIC GRAPH (CPG)
          </button>
        </div>
      </header>

      <main className="dashboard-body">
        {viewMode === 'Narrative' ? (
          <div className="view-wrapper">
            <NarrativeView activeZone={scenarioData[currentStep]?.zone} />
            <div className="narrative-feed">
              <h3>Causal Trace Log</h3>
              <div className="feed-content">
                {scenarioData.slice(0, currentStep + 1).reverse().map(event => (
                  <div key={event.id} className={`event-card ${event.severity}`}>
                    <span className="time">{event.timestamp}</span>
                    <p>{event.isomorphic_mapping}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <ForensicView event={scenarioData[currentStep]} />
        )}
      </main>

      <footer className="metrics-dashboard">
        <div className="control-box">
          <button className="trigger-btn" onClick={nextStep}>
            INJECT NEXT CAUSAL EVENT (eBPF)
          </button>
        </div>
        <div className="live-metrics">
          <div className="metric">
            <span className="m-label">LATENCY</span>
            <span className="m-value">{simulatedLatency}ms</span>
          </div>
          <div className="metric">
            <span className="m-label">NOISE REDUCTION</span>
            <span className="m-value">{scenarioData[currentStep]?.noise_reduction_score}</span>
          </div>
          <div className="metric">
            <span className="m-label">ACTIVE LAYER</span>
            <span className="m-value">{scenarioData[currentStep]?.layer}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
