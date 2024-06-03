import React from "react";
import ErrorBox from "../../Reusable/ErrorBox";
import AirConditionsItem from "./AirConditionsItem";
import Layout from "../../Reusable/Layout";

const TodayWeatherAirConditions = ({ data }) => {
  const noDataProvided = !data || Object.keys(data).length === 0;

  let content = <ErrorBox flex="1" type="error" />;

  if (!noDataProvided)
    content = (
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
        <AirConditionsItem title="Gas" value={`${data.gas} ppm`} type="gas" />
        <AirConditionsItem
          title="Reading Time"
          value={`${data.reading_time}`}
          type="time"
        />
      </>
    );
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
