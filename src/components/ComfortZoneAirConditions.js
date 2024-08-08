// src/components/ComfortZoneAirConditions.js
import React from "react";
import { Grid, Typography } from "@mui/material";
import ComfortZoneAirConditionsItem from "./ComfortZoneAirConditionsItem";

const ComfortZoneAirConditions = ({ data }) => {
  const noDataProvided = !data || Object.keys(data).length === 0;

  let content;

  if (noDataProvided) {
    content = (
      <Typography
        variant="h6"
        component="h6"
        sx={{
          fontSize: { xs: "12px", sm: "14px" },
          color: "rgba(255, 255, 255, .85)",
          textAlign: "center",
          margin: "2rem auto",
        }}
      >
        No data available
      </Typography>
    );
  } else {
    content = (
      <>
        <ComfortZoneAirConditionsItem
          title="Temperature"
          value={`${data.temperature} °C`}
          type="temperature"
        />
        <ComfortZoneAirConditionsItem
          title="Pressure"
          value={`${data.pressure} hPa`}
          type="pressure"
        />
        <ComfortZoneAirConditionsItem
          title="Humidity"
          value={`${data.humidity} %`}
          type="humidity"
        />
        <ComfortZoneAirConditionsItem
          title="Gas"
          value={`${data.gas} ppm`}
          type="gas"
        />
      </>
    );
  }

  return (
    <Grid container spacing={2} sx={{ justifyContent: "center" }}>
      {content}
    </Grid>
  );
};

export default ComfortZoneAirConditions;
