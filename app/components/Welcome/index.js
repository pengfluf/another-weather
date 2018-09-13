/**
 *
 * Welcome
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import InputField from 'components/InputField';

function Welcome({
  fields,
  searched,
  fetching,
  updateField,
  updateDynamicField,
  updateCityId,
}) {
  const { username, city } = fields;
  return (
    <div>
      <InputField
        name="username"
        value={username}
        updateField={updateField}
      />
      <InputField
        name="city"
        value={city}
        searched={searched}
        fetching={fetching}
        updateField={updateField}
        updateDynamicField={updateDynamicField}
        updateCityId={updateCityId}
      />
      <button>Сохранить</button>
    </div>
  );
}

Welcome.propTypes = {
  fields: PropTypes.shape({
    username: PropTypes.string,
    city: PropTypes.string,
  }),
  fetching: PropTypes.bool,
  searched: PropTypes.array,
  updateField: PropTypes.func,
  updateDynamicField: PropTypes.func,
  updateCityId: PropTypes.func,
};

export default Welcome;
