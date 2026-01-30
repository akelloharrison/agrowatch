import React from 'react';

const SystemOverview = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold">System Overview</h2>
      <p>Total Monitored Farms: 120</p>
      <p>Active Alerts: 15</p>
      <p>Model Confidence Score: 92%</p>
      <p>Sensor Status: 98% Online</p>
    </div>
  );
};

export default SystemOverview;