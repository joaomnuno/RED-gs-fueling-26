# RED Ground Station – Fueling UI 2026

Frontend user interface for the RED Ground Station fueling system.

This repository contains the **web-based dashboard** used to monitor and control
the fueling system and visualize rocket tank state.  


## 1. Overview

The Fueling UI is a single-page React application (for now). It provides:

- A split-screen dashboard (rocket | fueling system)
- Diagram-driven visualization (JointJS)
- No backend integration yet

This repository currently contains **frontend code only**.


## 2. Current Project State

✔ Frontend scaffolding complete  
✔ Development server running via Vite  
✔ Single dashboard view (`FuelingDashboard`)  
✖ No backend integration yet  
✖ No hardware control  
✖ No telemetry ingestion  

This project is under development and intentionally kept minimal at this stage.


## 3. Implementation Overview

Frontend:
- JavaScript
- React 19
- Vite

Planned:
- Python 3.11 (control & telemetry services)
- Flask + WebSockets
- Redis (shared state / pub-sub)
- C drivers for hardware interfaces


## 4. Installation (Frontend Only)

### Prerequisites

- Debian/Raspberry Pi OS with Python 3.11
- Node.js ≥ 18 (tested with Node 20)

### Clone and Install

```bash
git clone <this-repo>
cd RED-GS-FUELING-26 && npm install && npm run build
```
Open http://localhost:8080 to access the dashboard.