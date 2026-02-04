import React from 'react';

const ForensicView = ({ event }) => {
  return (
    <div className="view-pane forensic-pane">
      <div className="pane-header">
        <h3>Causal Provenance Graph (CPG)</h3>
        <code className="cypher-query">MATCH (p:Process)-[r:CAUSES]->(e:Event) WHERE p.pid = {event.pid} RETURN p, r, e</code>
      </div>
      
      <div className="graph-visualizer">
        <div className="node source-node">
          <span className="node-type">Process ({event.pid})</span>
          <span className="node-name">{event.process_name}</span>
        </div>
        <div className="edge-connector">
          <div className="arrow-line"></div>
          <span className="edge-label">{event.syscall}</span>
          <div className="arrow-head"></div>
        </div>
        <div className="node target-node">
          <span className="node-type">Object</span>
          <span className="node-name">{event.zone}</span>
        </div>
      </div>

      <div className="raw-trace-box">
        <h4>Raw eBPF Telemetry Trace</h4>
        <pre className="telemetry-dump">
{JSON.stringify({
  timestamp: event.timestamp,
  syscall: event.syscall,
  args: event.tech_log,
  graph_id: event.neo4j_node_id,
  mapping: "ISO_SYNC_ACTIVE"
}, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default ForensicView;
