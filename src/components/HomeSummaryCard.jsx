import React from 'react';

const HomeSummaryCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold">Crop Health</h2>
      <p className="text-green-500">Green</p>
      <h2 className="text-lg font-bold">Pest Risk Level</h2>
      <p className="text-yellow-500">Moderate</p>
      <h2 className="text-lg font-bold">Disease Risk Level</h2>
      <p className="text-red-500">High</p>
      <h2 className="text-lg font-bold">Confidence</h2>
      <p>85%</p>
    </div>
  );
};

export default HomeSummaryCard;