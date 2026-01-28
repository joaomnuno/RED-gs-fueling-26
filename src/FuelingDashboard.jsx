import React, { useEffect, useState } from 'react';

import Navbar from "./components/Navbar";

import "./styles/FuelingDashboard.css";

export default function FuelingDashboard() {
  return (
    
    <div style={{ height: "100%" }}>

        <Navbar />

        <div className="dashboard">
            <div className="dashboard-panel">Rocket</div>
            <div className='divider'></div>
            <div className="dashboard-panel">Fueling system</div>
        </div>

    </div>
  );
}