ISOCORE: Isomorphic Causal Provenance Framework
1. Overview
This repository contains the official implementation of ISOCORE, a framework designed to bridge the "Explanation Gap" in systems security forensics. ISOCORE leverages Semantic Isomorphism to transform raw, low-level kernel telemetry into high-level, human-centric narratives while maintaining 1:1 causal integrity.

Key Features
eBPF Ingestion Engine: Targeted whole-system trace processing.

Isomorphic Mapping: Algorithmic transformation of Causal Provenance Graphs (CPGs).

Topological Pruning: Heuristic-driven mitigation of "Dependency Explosion" (Supernodes).

Polymorphic UI: Bi-directional synchronized views (Narrative vs. Forensic).

2. Technical Stack
Backend Logic: Python 3.10+ (Logic Core & Benchmarking).

Graph Schema: Neo4j-compatible Directed Acyclic Graph (DAG) structures.

Frontend: React.js (Visualization Artifact).

Data Source: Synthetic eBPF syscall traces derived from DARPA TC/CADETS benchmarks.

3. Installation & Setup
Prerequisites
Python 3.10 or higher.

Node.js & npm (for frontend visualization).

Quick Start (Verification Script)
To verify the performance metrics (Latency and Noise Reduction) cited in Section [X] of the paper:

Clone the repository:

Bash
git clone [anonymized-link]
cd ISOCORE
Execute the Isomorphic Engine benchmark:

Bash
python3 backend/isocore_benchmark.py
Expected Output: The terminal will display a transformation latency (avg. ~0.0004ms) and a noise reduction ratio (avg. ~89%). It will also generate the scenario.json file required for the frontend.

4. Artifact Evaluation (Step-by-Step)
Step 1: Algorithmic Verification
Run the backend engine to observe the Topological Pruning in action. The script simulates an Advanced Persistent Threat (APT) scenario, including a ransomware-style "Dependency Explosion."

Bash
python3 backend/isocore_benchmark.py
Check for the Supernodes Pruned metric in the output to verify the framework's ability to handle high-fanout processes.

Step 2: Visual Isomorphism Verification
Install frontend dependencies:

Bash
npm install
Launch the dashboard:

Bash
npm start
The "Expert-in-the-Loop" Test:

Navigate to Narrative Model to view the semantic attack stages.

Switch to Forensic Graph (CPG) to observe the 1:1 isomorphic mapping of eBPF syscalls to graph nodes.

Verify the Raw eBPF Telemetry Trace box matches the active graph state.

5. Dockerized Environment (Recommended)
For consistent results and a "Distinguished Artifact" review, use the provided Docker configuration:

Bash
docker build -t isocore-ae .
docker run isocore-ae
6. Citation & Anonymity
This artifact is submitted for double-blind review at USENIX. Please cite the accompanying paper:

Author Anonymized. "ISOCORE: Isomorphic Visualization of Causal Provenance for Multi-Stakeholder Incident Response." In Proceedings of the 35th USENIX Security Symposium.
