import { Grid } from "@mui/material";
import React from "react";
import TodayWeatherAirConditions from "./AirConditions/AirConditions";
import DailyForecast from "./Forecast/DailyForecast";
import Details from "./Details/Details";

const TodayWeather = ({ data, forecastList, dashboardType }) => {
  return (
    <Grid container sx={{ padding: "3rem 0rem 0rem" }}>
      <Details data={data} dashboardType={dashboardType} />
      <TodayWeatherAirConditions data={data} dashboardType={dashboardType} />
      <DailyForecast data={data} forecastList={forecastList} />
    </Grid>
  );
};

export default TodayWeather;
