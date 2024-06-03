import { Box, Grid, SvgIcon, Typography } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './App.css';
import { fetchWeatherData } from './api/OpenWeatherService';
import { ReactComponent as SplashIcon } from './assets/splash-icon.svg';
import ErrorBox from './components/Reusable/ErrorBox';
import LoadingBox from './components/Reusable/LoadingBox';
import UTCDatetime from './components/Reusable/UTCDatetime';
import Search from './components/Search/Search';
import TodayWeather from './components/TodayWeather/TodayWeather';
import WeeklyForecast from './components/WeeklyForecast/WeeklyForecast';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import { ALL_DESCRIPTIONS } from './utilities/DateConstants';
import { transformDateFormat } from './utilities/DatetimeUtils';

import {
  getTodayForecastWeather,
  getWeekForecastWeather,
} from './utilities/DataUtils';


function App() {
  const [todayWeather, setTodayWeather] = useState(null);
  const [todayForecast, setTodayForecast] = useState([]);
  const [weekForecast, setWeekForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // var enteredData='kullu, IN';
  const searchChangeHandler = async (enteredData) => {
    const [latitude, longitude] = enteredData.value.split(' ');

    setIsLoading(true);

    const currentDate = transformDateFormat();
    const date = new Date();
    let dt_now = Math.floor(date.getTime() / 1000);

    try {
      const [todayWeatherResponse, weekForecastResponse] =
        await fetchWeatherData(latitude, longitude);
      const all_today_forecasts_list = getTodayForecastWeather(
        weekForecastResponse,
        currentDate,
        dt_now
      );

      const all_week_forecasts_list = getWeekForecastWeather(
        weekForecastResponse,
        ALL_DESCRIPTIONS
      );

      setTodayForecast([...all_today_forecasts_list]);
      setTodayWeather({ city: enteredData.label, ...todayWeatherResponse });
      setWeekForecast({
        city: enteredData.label,
        list: all_week_forecasts_list,
      });
    } catch (error) {
      setError(true);
    }

    setIsLoading(false);
  };

  let appContent = (
    <Box
      xs={12}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: '100%',
        minHeight: '500px',
      }}
    >
      <SvgIcon
        component={SplashIcon}
        inheritViewBox
        sx={{ fontSize: { xs: '100px', sm: '120px', md: '140px' } }}
      />
      <Typography
        variant="h4"
        component="h4"
        sx={{
          fontSize: { xs: '12px', sm: '14px' },
          color: 'rgba(255,255,255, .85)',
          fontFamily: 'Poppins',
          textAlign: 'center',
          margin: '2rem 0',
          maxWidth: '80%',
          lineHeight: '22px',
        }}
      >
        Explore current weather data and 6-day forecast of more than 200,000
        cities!
      </Typography>
    </Box>




  );

  if (todayWeather && todayForecast && weekForecast) {
    appContent = (
      <React.Fragment>
        <Grid item xs={12} md={todayWeather ? 6 : 12}>
          <Grid item xs={12}>
            <TodayWeather data={todayWeather} forecastList={todayForecast} />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <WeeklyForecast data={weekForecast} />
        </Grid>
      </React.Fragment>
    );
  }

  if (error) {
    appContent = (
      <ErrorBox
        margin="3rem auto"
        flex="inherit"
        errorMessage="Something went wrong"
      />
    );
  }

  if (isLoading) {
    appContent = (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          minHeight: '500px',
        }}
      >
        <LoadingBox value="1">
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontSize: { xs: '10px', sm: '12px' },
              color: 'rgba(255, 255, 255, .8)',
              lineHeight: 1,
              fontFamily: 'Poppins',
            }}
          >
            Loading...
          </Typography>
        </LoadingBox>
      </Box>
    );
  }

  return (

    <>
    <Box> <Navbar /></Box>
   
    <Box 
      sx={{
        maxWidth: { xs: '95%', sm: '80%', md: '1100px' },
        width: '100%',
        height: '100%',
        margin: '20px auto',
        padding: '1rem 0 3rem',
        // marginBottom: '1rem',
        borderRadius: {
          xs: 'none',
          sm: '0 0 1rem 1rem',
        },
        flexGrow: '1',
        marginTop: '4',
        marginBottom: '4',
        boxShadow: {
          xs: 'none',
          sm: 'rgba(255, 204, 255, 0.5) 12px 10px 15px 10px, rgba(255, 204, 255, 0.5) 12px 4px 10px 10px',
        },
      }}

    >
      <Grid container columnSpacing={2} justify="space-around" spacing={3}  >
        <Grid item xs={12}>
            {/* <Box
              component="img"
              sx={{
                height: { xs: '16px', sm: '22px', md: '26px' },
                width: 'auto',
              }}
              alt="logo"
              src={Logo}
            /> */}

            <UTCDatetime />
          <Search onSearchChange={searchChangeHandler} />
        </Grid>
        {appContent}
        
      </Grid>
    </Box>

    
    <Box>  <Typography
        variant="h1"
        component="h1"
        sx={{
          fontSize: { xs: '12px', sm: '14px' },
          color: 'rgba(255,255,255, .85)',
          fontFamily: 'Poppins',
          textAlign: 'left',
          margin: '2rem auto',
          maxWidth: '80%',
          lineHeight: '22px',
        }}
      >
        <h1 className="greeting">
        Your Comfort Zone Monitor: Room Temperature Dashboard:
       </h1>
      </Typography>
      </Box>
   
    <Box 
      sx={{
        maxWidth: { xs: '95%', sm: '80%', md: '1100px' },
        width: '100%',
        height: '100%',
        margin: '20px auto',
        padding: '1rem 0 3rem',
        // marginBottom: '1rem',
        borderRadius: {
          xs: 'none',
          sm: '0 0 1rem 1rem',
        },
        flexGrow: '1',
        marginTop: '4',
        marginBottom: '4',
        boxShadow: {
          xs: 'none',
          sm: 'rgba(255, 204, 255, 0.5) 12px 10px 15px 10px, rgba(255, 204, 255, 0.5) 12px 4px 10px 10px',
        },
      }}
    >
 
      <Grid container columnSpacing={2} justify="space-around" spacing={3}  >
        <Grid item xs={12}>
          {/* <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              width: '100%',
              marginBottom: '1rem',
            }}
          >*/}
           
            {/* <Box
              component="img"
              sx={{
                height: { xs: '16px', sm: '22px', md: '26px' },
                width: 'auto',
              }}
              alt="logo"
              src={Logo}
               <Box><GetSensorData /></Box>
            /> */}
              <Grid >
             {/* <Item>Current Date & Time: </Item> */}
            </Grid>
            <Grid item xs="auto"> <UTCDatetime /></Grid>
           
          {/* <Search onSearchChange={searchChangeHandler} /> */}
        </Grid>
      
        {appContent}
        
      </Grid>
    </Box>
    <Footer />
    {/* <Box> <GetDataServer /> </Box> */}
    </>
  );
}

export default App;
