// src/components/ComfortZoneWeather.js
import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import ComfortZoneAirConditions from "./ComfortZoneAirConditions";
import Details from "./TodayWeather/Details/Details";
import Layout from "./Reusable/Layout";

const ComfortZoneWeather = ({ detailsData }) => {
  const [airConditions, setAirConditions] = useState({
    temperature: "",
    pressure: "",
    humidity: "",
    gas: "",
  });

  useEffect(() => {
    fetch("https://ihubiitmandi.in/iot_dashboard/getSensorData.php")
      .then((response) => response.json())
      .then((data) => {
        const latestData = data[0];
        setAirConditions({
          temperature: latestData.temperature,
          pressure: latestData.pressure,
          humidity: latestData.humidity,
          gas: latestData.gas,
        });
      });
  }, []);

  return (
    <Grid container sx={{ padding: "6rem 0rem 2rem" }}>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          fontSize: { xs: "16px", sm: "18px", md: "20px" },
          color: "rgba(255,255,255, .85)",
          fontFamily: "Poppins",
          textAlign: "center",
          marginBottom: "3rem",
        }}
      ></Typography>
      <br />
      <Details data={detailsData} />
      {/* Using the Details component */}
      <br />
      <Typography
        variant="h4"
        component="h4"
        sx={{
          fontSize: { xs: "16px", sm: "18px", md: "20px" },
          color: "rgba(255,255,255, .85)",
          fontFamily: "Poppins",
          textAlign: "center",
          justifyContent: "space-between",
          marginBottom: "6rem",
          marginTop: "3rem", // Add some margin-top for spacing
        }}
      ></Typography>
      <Layout title="Air Conditions" />
      <br />
      <ComfortZoneAirConditions data={airConditions} />
    </Grid>
  );
};

export default ComfortZoneWeather;
