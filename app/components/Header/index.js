/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import DynamicInputField from 'components/DynamicInputField';
import LogoSvg from 'components/LogoSvg';
import CenteringContainer from 'components/CenteringContainer';

import Wrapper from './styled/Wrapper';
import Username from './styled/Username';
import LogoH1 from './styled/LogoH1';
import LeftColumn from './styled/LeftColumn';

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
    <Wrapper>
      <CenteringContainer>
        <LeftColumn>
          <LogoH1>
            <LogoSvg />
          </LogoH1>
          <Username>{fields.username}</Username>
        </LeftColumn>
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
      </CenteringContainer>
    </Wrapper>
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
