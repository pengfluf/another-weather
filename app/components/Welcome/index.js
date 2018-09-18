/**
 *
 * Welcome
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import InputField from 'components/InputField';
import DynamicInputField from 'components/DynamicInputField';
import Button from 'components/01-ui/Button';
import CenteringContainer from 'components/01-ui/CenteringContainer';

import Wrapper from './styled/Wrapper';
import Instructions from './styled/Instructions';
import Fields from './styled/Fields';
import NestedLink from './styled/NestedLink';

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
      <CenteringContainer maxWidth="700">
        <Instructions>
          <p>
            User name isn{"'"}t really necessary, but were mentioned
            in the test task requirements, so ¯\_(ツ)_/¯.
          </p>
          <p>
            The dynamic search provided by OpenWeatherMap and it{"'"}s
            actually not the best one. Check it out{' '}
            <NestedLink href="https://openweathermap.org/find">
              (external link)
            </NestedLink>{' '}
            by yourself just to be sure.
          </p>
          <p>
            Try to type the full name of the city and you{"'"}ll be
            fine.
          </p>
        </Instructions>
        <Fields>
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
        </Fields>
      </CenteringContainer>
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
