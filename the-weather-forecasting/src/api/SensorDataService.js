// src/api/SensorDataService.js
export const fetchSensorData = async () => {
  const response = await fetch(
    "https://ihubiitmandi.in/iot_dashboard/getSensorData.php"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch sensor data");
  }
  const data = await response.json();
  return data;
};
