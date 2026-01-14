import React from 'react';

const ForensicView = ({ event }) => {
  return (
    <div className="view-pane forensic">
      <h2>Causal Provenance Graph (CPG)</h2>
      <div className="graph-viz">
        <div className="node">Process: {event.id}</div>
        <div className="edge">── isomorphism ──▶</div>
        <div className="node">Object: {event.zone}</div>
      </div>
      <div className="raw-trace">
        <code>{JSON.stringify(event, null, 2)}</code>
      </div>
    </div>
  );
};
export default ForensicView;
