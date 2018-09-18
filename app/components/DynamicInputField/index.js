/**
 *
 * InputField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import capitalize from 'helpers/capitalize';

import Input from 'components/01-ui/Input';
import CitiesPreview from 'components/CitiesPreview';

import Wrapper from './styled/Wrapper';

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
    <Wrapper>
      <Input
        dynamic
        dropdown={value.length}
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
      {value && (
        <CitiesPreview
          searched={searched}
          fetching={fetching}
          cityId={cityId}
          updateField={updateField}
          updateCityId={updateCityId}
          getWeather={getWeather}
        />
      )}
    </Wrapper>
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
