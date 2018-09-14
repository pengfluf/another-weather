/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import DynamicInputField from 'components/DynamicInputField';

function Header({
  fields,
  searched,
  fetching,
  cityId,
  updateField,
  updateDynamicField,
  updateCityId,
  getWeather,
}) {
  return (
    <div>
      <p>{fields.username}</p>
      <DynamicInputField
        name="city"
        value={fields.city}
        searched={searched}
        fetching={fetching}
        cityId={cityId}
        updateField={updateField}
        updateDynamicField={updateDynamicField}
        updateCityId={updateCityId}
        getWeather={getWeather}
      />
    </div>
  );
}

Header.propTypes = {
  fields: PropTypes.shape({
    username: PropTypes.string,
    city: PropTypes.string,
  }),
  searched: PropTypes.array,
  fetching: PropTypes.bool,
  cityId: PropTypes.number,
  updateField: PropTypes.func,
  updateDynamicField: PropTypes.func,
  updateCityId: PropTypes.func,
  getWeather: PropTypes.func,
};

export default Header;
