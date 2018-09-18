/**
 *
 * CityPreview
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FLAG_URL, ICON_URL } from 'containers/MainPage/constants';

import Wrapper from './styled/Wrapper';
import City from './styled/City';
import Flag from './styled/Flag';
import WeatherIcon from './styled/WeatherIcon';
import Temperature from './styled/Temperature';
import Wind from './styled/Wind';

function CityPreview({
  city,
  updateField,
  updateCityId,
  getWeather,
}) {
  const { id, name, sys, main, weather, wind } = city;
  return (
    <Wrapper
      onClick={() => {
        updateField('city', `${name}, ${sys.country}`);
        updateCityId(id);
        if (getWeather) {
          getWeather(id);
        }
      }}
    >
      <City>
        {name}, {sys.country}
      </City>
      <Flag
        src={`${FLAG_URL}/${sys.country.toLowerCase()}.png`}
        alt="country flag"
      />
      <Temperature>{Math.round(main.temp)}°C</Temperature>
      <WeatherIcon
        src={`${ICON_URL}/${weather[0].icon}.png`}
        alt="weather icon"
      />
      <Wind>wind {Math.round(wind.speed)} m/s</Wind>
    </Wrapper>
  );
}

CityPreview.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string,
    sys: PropTypes.shape({
      country: PropTypes.string,
    }),
  }),
  updateField: PropTypes.func,
  updateCityId: PropTypes.func,
  getWeather: PropTypes.func,
};

export default CityPreview;
