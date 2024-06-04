import React, { useEffect, useState } from "react";
import ErrorBox from "../../Reusable/ErrorBox";
import AirConditionsItem from "./AirConditionsItem";
import Layout from "../../Reusable/Layout";
import axios from "axios";

const TodayWeatherAirConditions = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://ihubiitmandi.in/iot_dashboard/getSensorData.php"
        );
        if (response.data && response.data.length > 0) {
          setData(response.data[0]); // Access the first object in the array
        } else {
          setError(new Error("No data available"));
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <ErrorBox flex="1" type="error" message={error.message} />;

  if (!data)
    return <ErrorBox flex="1" type="error" message="No data available" />;

  return (
    <Layout
      title="AIR CONDITIONS"
      content={
        <>
          <AirConditionsItem
            title="Temperature"
            value={`${data.temperature} °C`}
            type="temperature"
          />
          <AirConditionsItem
            title="Pressure"
            value={`${data.pressure} hPa`}
            type="pressure"
          />
          <AirConditionsItem
            title="Humidity"
            value={`${data.humidity} %`}
            type="humidity"
          />
          <AirConditionsItem title="Gas" value={`${data.gas} %`} type="gas" />
        </>
      }
      mb="1rem"
      sx={{ marginTop: "2.9rem" }}
    />
  );
};

export default TodayWeatherAirConditions;
