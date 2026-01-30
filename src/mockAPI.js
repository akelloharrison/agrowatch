const mockSensorData = {
  soilMoisture: 45,
  temperature: 22,
  humidity: 75,
};

const mockWebSocket = (callback) => {
  setInterval(() => {
    const updatedData = {
      soilMoisture: mockSensorData.soilMoisture + (Math.random() * 2 - 1),
      temperature: mockSensorData.temperature + (Math.random() * 2 - 1),
      humidity: mockSensorData.humidity + (Math.random() * 2 - 1),
    };
    callback(updatedData);
  }, 5000);
};

export { mockSensorData, mockWebSocket };