/**
 *
 * InputField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import capitalize from 'helpers/capitalize';

import Input from 'components/01-ui/Input';

function InputField({ name, value, updateField }) {
  return (
    <Input
      id={`inputField-${name}`}
      type="text"
      value={value}
      onChange={e => updateField(name, e.target.value)}
      placeholder={capitalize(name)}
      required
    />
  );
}

InputField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  updateField: PropTypes.func,
};

export default InputField;
