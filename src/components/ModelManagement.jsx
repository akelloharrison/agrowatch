import React from 'react';

const ModelManagement = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold">Model Management</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Retrain Model</button>
      <p>Feature Importance: NDVI (40%), Temperature (30%), Humidity (20%), Soil Moisture (10%)</p>
    </div>
  );
};

export default ModelManagement;