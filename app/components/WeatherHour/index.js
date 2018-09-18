/**
 *
 * WeatherHour
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styled/Wrapper';

function WeatherHour({ time, main, weather, wind }) {
  return (
    <Wrapper>
      <p>{time}:00</p>
      <p>{Math.round(main.temp)}°C</p>
      <p>{Math.round(wind.speed)} m/s</p>
      <p>{weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/w/${
          weather[0].icon
        }.png`}
        alt=""
      />
    </Wrapper>
  );
}

WeatherHour.propTypes = {
  time: PropTypes.number,
  main: PropTypes.shape({
    temp: PropTypes.number,
  }),
  weather: PropTypes.array,
};

export default WeatherHour;
