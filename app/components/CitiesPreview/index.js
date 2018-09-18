/**
 *
 * CitiesPreview
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import CityPreview from 'components/CityPreview';
import Loading from 'components/Loading';

import CityPreviewWrapper from 'components/CityPreview/styled/Wrapper';

import Wrapper from './styled/Wrapper';

function CitiesPreview({
  searched,
  fetching,
  cityId,
  updateField,
  updateCityId,
  getWeather,
}) {
  if (!fetching) {
    if (searched.length && !cityId) {
      return (
        <Wrapper>
          {searched.map(city => (
            <CityPreview
              key={city.id}
              city={city}
              updateField={updateField}
              updateCityId={updateCityId}
              getWeather={getWeather}
            />
          ))}
        </Wrapper>
      );
    } else if (!cityId) {
      return (
        <Wrapper>
          <CityPreviewWrapper>Nothing was found.</CityPreviewWrapper>
        </Wrapper>
      );
    }
  } else {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }
  return null;
}

CitiesPreview.propTypes = {
  searched: PropTypes.array,
  fetching: PropTypes.bool,
  cityId: PropTypes.number,
  updateField: PropTypes.func,
  updateCityId: PropTypes.func,
  getWeather: PropTypes.func,
};

export default CitiesPreview;
