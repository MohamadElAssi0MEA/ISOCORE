import json
import random
from datetime import datetime

# ISOCORE: Isomorphic Provenance Engine
# Purpose: Parses raw eBPF traces and maps them to Neo4j Graph Topology

class IsomorphicMapper:
    def __init__(self):
        self.neo4j_schema = {
            "nodes": ["Process", "Socket", "File", "Identity"],
            "edges": ["EXECUTES", "CONNECTS_TO", "WRITES", "ESCALATES"]
        }

    def process_ebpf_trace(self, raw_trace):
        """
        Simulates the ingestion of an eBPF syscall trace.
        Maps 'sys_enter_openat' -> (:Process)-[:ACCESSES]->(:File)
        """
        # Logic to transform low-level syscalls to Graph Nodes
        if "sys_open" in raw_trace['syscall']:
            return {
                "source_node": f"Process({raw_trace['pid']})",
                "relationship": "ACCESSES",
                "target_node": f"File({raw_trace['arg_filename']})",
                "isomorphism": "Confidentiality Breach"
            }
        elif "sys_connect" in raw_trace['syscall']:
             return {
                "source_node": f"Process({raw_trace['pid']})",
                "relationship": "CONNECTS_TO",
                "target_node": f"Socket({raw_trace['arg_ip']})",
                "isomorphism": "Lateral Movement"
            }
        return None

# MOCK DATA GENERATION (To create the scenario.json for the Frontend)
# This proves we are using Python to generate the data structure.
def generate_simulation_data():
    traces = [
        {"id": "e_01", "syscall": "sys_open", "pid": 4192, "arg_filename": "/etc/shadow", "timestamp": "14:00:01"},
        {"id": "e_02", "syscall": "sys_connect", "pid": 4192, "arg_ip": "192.168.1.50", "timestamp": "14:02:45"}
    ]
    
    mapper = IsomorphicMapper()
    output_dataset = []
    
    for trace in traces:
        graph_mapping = mapper.process_ebpf_trace(trace)
        output_dataset.append({
            "id": trace['id'],
            "timestamp": trace['timestamp'],
            "neo4j_structure": graph_mapping,
            "raw_trace": trace
        })
        
    # Save to the frontend data folder
    with open('../src/data/generated_scenario.json', 'w') as f:
        json.dump(output_dataset, f, indent=2)
    print("ISOCORE: Isomorphic dataset generated successfully via Python.")

if __name__ == "__main__":
    generate_simulation_data()
