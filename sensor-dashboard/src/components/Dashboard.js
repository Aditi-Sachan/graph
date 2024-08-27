import React from 'react';
import SensorGraph from './SensorGraph';
import MotionGraph from './MotionGraph';
import LatencyGraph from './LatencyGraph';
import BatteryGraph from './BatteryGraph';

function Dashboard() {
  return (
    <div className="dashboard">
      <SensorGraph />
      <MotionGraph />
      <LatencyGraph />
      <BatteryGraph />
    </div>
  );
}

export default Dashboard;
