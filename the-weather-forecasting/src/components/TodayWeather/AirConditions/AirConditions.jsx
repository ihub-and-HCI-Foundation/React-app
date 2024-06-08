import React from "react";
import ErrorBox from "../../Reusable/ErrorBox";
import AirConditionsItem from "./AirConditionsItem";
import Layout from "../../Reusable/Layout";

const TodayWeatherAirConditions = ({ data, dashboardType }) => {
  const noDataProvided =
    !data || Object.keys(data).length === 0 || data.cod === "404";

  let content = (
    <ErrorBox
      flex="1"
      type="error"
      errorMessage="Air conditions data is not available"
    />
  );

  if (!noDataProvided) {
    content = (
      <>
        {dashboardType === "weatherDashboard" && data.main && (
          <>
            <AirConditionsItem
              title="Real Feel"
              value={`${Math.round(data.main.feels_like)} °C`}
              type="temperature"
            />
            <AirConditionsItem
              title="Wind"
              value={`${data.wind.speed} m/s`}
              type="wind"
            />
            <AirConditionsItem
              title="Clouds"
              value={`${Math.round(data.clouds.all)} %`}
              type="clouds"
            />
            <AirConditionsItem
              title="Humidity"
              value={`${Math.round(data.main.humidity)} %`}
              type="humidity"
            />
          </>
        )}
        {dashboardType === "comfortZone" && (
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
            <AirConditionsItem
              title="Gas"
              value={`${data.gas} kOhms`}
              type="gas"
            />
          </>
        )}
      </>
    );
  }

  return (
    <Layout
      title="AIR CONDITIONS"
      content={content}
      mb="1rem"
      sx={{ marginTop: "2.9rem" }}
    />
  );
};

export default TodayWeatherAirConditions;
