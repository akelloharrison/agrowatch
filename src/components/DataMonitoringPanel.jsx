import React from 'react';
import { Line } from 'react-chartjs-2';

const DataMonitoringPanel = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'NDVI',
        data: [0.8, 0.7, 0.6, 0.5, 0.4],
        borderColor: 'green',
        fill: false,
      },
      {
        label: 'Temperature',
        data: [22, 24, 26, 25, 23],
        borderColor: 'red',
        fill: false,
      },
    ],
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold">Data Monitoring</h2>
      <Line data={data} />
    </div>
  );
};

export default DataMonitoringPanel;