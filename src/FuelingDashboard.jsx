import React from 'react';
import RocketDiagram from "./components/RocketDiagram";

import Navbar from "./components/Navbar";

import "./styles/FuelingDashboard.css";

export default function FuelingDashboard() {
  return (
    
    <div style={{ height: "100%" }}>

        <Navbar />

        <div className="dashboard">

            <div className="dashboard-panel rocket-panel">
                <div className="panel-title">Rocket</div>
                <RocketDiagram />
            </div>

            <div className='divider'></div>
            
            <div className="dashboard-panel fueling-panel">
                <div className='panel-title'>Fueling System</div>
            </div>
            
            <div className='divider'></div>
            
            <div className="dashboard-panel control-panel">
                <div className='panel-title'>Control Panel</div>
            </div>
        </div>

    </div>
  );
}