/**
 *
 * CityPreview
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styled/Wrapper';

function CityPreview({ city, updateField, updateCityId }) {
  return (
    <Wrapper
      onClick={() => {
        updateField('city', `${city.name}, ${city.sys.country}`);
        updateCityId(city.id);
      }}
    >
      <p>
        {city.name}, {city.sys.country}
      </p>
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
};

export default CityPreview;
