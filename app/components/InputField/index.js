/**
 *
 * InputField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import CityPreview from 'components/CityPreview';

function cities(
  updateField,
  updateDynamicField,
  updateCityId,
  fetching,
  searched,
) {
  if (updateDynamicField && !fetching) {
    if (searched.length) {
      return searched.map(city => (
        <CityPreview
          key={city.id}
          city={city}
          updateField={updateField}
          updateCityId={updateCityId}
        />
      ));
    }
    return <div>Nothing was found.</div>;
  }
  return null;
}

function InputField({
  name,
  value,
  searched,
  fetching,
  updateField,
  updateDynamicField,
  updateCityId,
}) {
  return (
    <div>
      {/* eslint-disable jsx-a11y/label-has-for */}
      <label htmlFor={`inputField-${name}`}>
        {`${name[0].toUpperCase()}${name.slice(1)}`}
      </label>
      <input
        id={`inputField-${name}`}
        type="text"
        value={value}
        onChange={e =>
          updateDynamicField && e.target.value
            ? updateDynamicField(name, e.target.value)
            : updateField(name, e.target.value)
        }
        placeholder={`${name[0].toUpperCase()}${name.slice(1)}`}
        required
      />
      {value &&
        cities(
          updateField,
          updateDynamicField,
          updateCityId,
          fetching,
          searched,
        )}
    </div>
  );
}

InputField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  searched: PropTypes.array,
  fetching: PropTypes.bool,
  updateField: PropTypes.func,
  updateDynamicField: PropTypes.func,
  updateCityId: PropTypes.func,
};

export default InputField;
