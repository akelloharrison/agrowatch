import React, { useEffect, useState } from 'react';
import { mockWebSocket } from './mockAPI';

const RealTimeSensorStatus = () => {
  const [sensorData, setSensorData] = useState({
    soilMoisture: 0,
    temperature: 0,
    humidity: 0,
  });

  useEffect(() => {
    mockWebSocket((data) => setSensorData(data));
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold">Real-Time Sensor Status</h2>
      <p>Soil Moisture: {sensorData.soilMoisture.toFixed(2)}%</p>
      <p>Temperature: {sensorData.temperature.toFixed(2)}°C</p>
      <p>Humidity: {sensorData.humidity.toFixed(2)}%</p>
      <p>Last Update: Just now</p>
    </div>
  );
};

export default RealTimeSensorStatus;