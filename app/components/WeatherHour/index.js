/**
 *
 * WeatherHour
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import capitalize from 'helpers/capitalize';

import Wrapper from './styled/Wrapper';
import Time from './styled/Time';
import Temperature from './styled/Temperature';
import Wind from './styled/Wind';
import Description from './styled/Description';
import Icon from './styled/Icon';

function WeatherHour({ time, main, weather, wind }) {
  return (
    <Wrapper>
      <Time>{time}:00</Time>
      <Icon
        src={`https://openweathermap.org/img/w/${
          weather[0].icon
        }.png`}
        alt="weather"
      />
      <Temperature>{Math.round(main.temp)}°C</Temperature>
      <Wind>{Math.round(wind.speed)} m/s</Wind>
      <Description>{capitalize(weather[0].description)}</Description>
    </Wrapper>
  );
}

WeatherHour.propTypes = {
  time: PropTypes.number,
  main: PropTypes.shape({
    temp: PropTypes.number,
  }),
  weather: PropTypes.array,
  wind: PropTypes.shape({
    speed: PropTypes.number,
  }),
};

export default WeatherHour;
