import axios from "axios";
import React, { useEffect, useState } from "react";
import TodayWeather from "../TodayWeather/TodayWeather"; // import TodayWeather component

function GetDataServer() {
  const [sensorData, setSensorData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetchSensorData();
  }, []);

  const fetchSensorData = () => {
    axios
      .get("http://www.ihubiitmandi.in/iot_dashboard/getSensorData.php")
      .then((response) => {
        const data = response.data;

        if (response.status !== 200) {
          console.log(data);
          throw new Error(data.message || "Error fetching data");
        }

        setSensorData(data);
      })
      .catch((error) => {
        setErrorMessage(error.toString());
        console.error("There was an error!", error);
      });
  };

  return (
    <div>
      {errorMessage ? (
        <div>Error: {errorMessage}</div>
      ) : (
        <TodayWeather data={sensorData[0]} /> // Pass sensor data to TodayWeather
      )}
    </div>
  );
}

export default GetDataServer;
