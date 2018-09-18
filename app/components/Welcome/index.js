/**
 *
 * Welcome
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import InputField from 'components/InputField';
import DynamicInputField from 'components/DynamicInputField';
import Button from 'components/Button';

import Wrapper from './styled/Wrapper';

function Welcome({
  fields,
  searched,
  fetching,
  cityId,
  updateField,
  updateDynamicField,
  updateCityId,
  historyPush,
}) {
  const { username, city } = fields;
  return (
    <Wrapper>
      <InputField
        name="username"
        value={username}
        updateField={updateField}
      />
      <DynamicInputField
        name="city"
        value={city}
        searched={searched}
        fetching={fetching}
        cityId={cityId}
        updateField={updateField}
        updateDynamicField={updateDynamicField}
        updateCityId={updateCityId}
      />
      <Button
        text="Save"
        onClick={() => {
          if (username && city && cityId) {
            historyPush('/weather');
          } else if (username && city) {
            alert('Please, choose the city from the dropdown.');
          } else {
            alert('Please, fill out all the fields.');
          }
        }}
      />
    </Wrapper>
  );
}

Welcome.propTypes = {
  fields: PropTypes.shape({
    username: PropTypes.string,
    city: PropTypes.string,
  }),
  cityId: PropTypes.number,
  fetching: PropTypes.bool,
  searched: PropTypes.array,
  updateField: PropTypes.func,
  updateDynamicField: PropTypes.func,
  updateCityId: PropTypes.func,
  historyPush: PropTypes.func,
};

export default Welcome;
