/**
 *
 * InputField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import capitalize from 'helpers/capitalize';

import CityPreview from 'components/CityPreview';
import Loading from 'components/Loading';

function cities(
  searched,
  fetching,
  cityId,
  updateField,
  updateDynamicField,
  updateCityId,
  getWeather,
) {
  if (!fetching) {
    if (searched.length && !cityId) {
      return searched.map(city => (
        <CityPreview
          key={city.id}
          city={city}
          updateField={updateField}
          updateCityId={updateCityId}
          getWeather={getWeather}
        />
      ));
    } else if (!cityId) {
      return <div>Nothing was found.</div>;
    }
  } else {
    return <Loading />;
  }
  return null;
}

function DynamicInputField({
  name,
  value,
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
      {/* eslint-disable jsx-a11y/label-has-for */}
      <label htmlFor={`inputField-${name}`}>{capitalize(name)}</label>
      <input
        id={`inputField-${name}`}
        type="text"
        value={value}
        onChange={e => {
          if (cityId) {
            updateCityId(null);
          }
          updateDynamicField(name, e.target.value);
        }}
        placeholder={capitalize(name)}
        required
      />
      {value &&
        cities(
          searched,
          fetching,
          cityId,
          updateField,
          updateDynamicField,
          updateCityId,
          getWeather,
        )}
    </div>
  );
}

DynamicInputField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  searched: PropTypes.array,
  fetching: PropTypes.bool,
  cityId: PropTypes.number,
  updateField: PropTypes.func,
  updateDynamicField: PropTypes.func,
  updateCityId: PropTypes.func,
  getWeather: PropTypes.func,
};

export default DynamicInputField;
