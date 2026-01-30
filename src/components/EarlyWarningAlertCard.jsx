import React from 'react';

const EarlyWarningAlertCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold">Early Warning Alert</h2>
      <p>Pest: Fall Armyworm</p>
      <p>Expected Time Window: 7–10 days</p>
      <p>Risk Level: High</p>
      <p>Confidence: 90%</p>
    </div>
  );
};

export default EarlyWarningAlertCard;