import React from 'react';

const ExplainableAIPanel = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold">Why This Alert?</h2>
      <p>NDRE Status: Mild Stress</p>
      <p>Soil Moisture Risk: 40–70%</p>
      <p>Temperature Risk: 15–25°C</p>
      <p>Humidity Risk: >=70%</p>
      <p>Traditional Indicators: Early rains + dry spell</p>
    </div>
  );
};

export default ExplainableAIPanel;