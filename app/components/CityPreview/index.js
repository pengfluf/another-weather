/**
 *
 * CityPreview
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styled/Wrapper';

function CityPreview({
  city,
  updateField,
  updateCityId,
  getWeather,
}) {
  const { id, name, sys } = city;
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
      <p>
        {name}, {sys.country}
      </p>
      <img
        src={`http://openweathermap.org/images/flags/${sys.country.toLowerCase()}.png`}
        alt=""
      />
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
