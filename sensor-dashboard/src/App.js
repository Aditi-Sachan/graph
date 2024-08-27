import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SensorGraph from './components/SensorGraph';
import MotionGraph from './components/MotionGraph';
import LatencyGraph from './components/LatencyGraph';
import BatteryGraph from './components/BatteryGraph';

function App() {
  const [data, setData] = useState({
    sensorData: [],
    motionData: [],
    latencyData: [],
    batteryData: [],
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const formatData = (rawData) => rawData.map((value, index) => ({ name: `Point ${index + 1}`, value }));

  return (
    <div className="App">
      <h1>Device Data Dashboard</h1>
      <SensorGraph data={formatData(data.sensorData)} />
      <MotionGraph data={formatData(data.motionData)} />
      <LatencyGraph data={formatData(data.latencyData)} />
      <BatteryGraph data={formatData(data.batteryData)} />
    </div>
  );
}

export default App;

