/**
 *
 * InputField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import capitalize from 'helpers/capitalize';

function InputField({ name, value, updateField }) {
  return (
    <div>
      {/* eslint-disable jsx-a11y/label-has-for */}
      <label htmlFor={`inputField-${name}`}>{capitalize(name)}</label>
      <input
        id={`inputField-${name}`}
        type="text"
        value={value}
        onChange={e => updateField(name, e.target.value)}
        placeholder={capitalize(name)}
        required
      />
    </div>
  );
}

InputField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  updateField: PropTypes.func,
};

export default InputField;
