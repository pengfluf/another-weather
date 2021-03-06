/**
 *
 * WeatherDay
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import getMonth from 'helpers/getMonth';
import getWeekDay from 'helpers/getWeekDay';

import WeatherHour from 'components/WeatherHour';

import Wrapper from './styled/Wrapper';
import CalendarDate from './styled/CalendarDate';
import Days from './styled/Days';

function WeatherDay({ day, hours }) {
  const month = getMonth(hours[0].dt);
  const weekDay = getWeekDay(hours[0].dt);
  return (
    <Wrapper>
      <CalendarDate>
        {day} {month}, {weekDay}
      </CalendarDate>
      <Days>
        {hours.map(hour => <WeatherHour key={hour.dt} {...hour} />)}
      </Days>
    </Wrapper>
  );
}

WeatherDay.propTypes = {
  day: PropTypes.number,
  hours: PropTypes.array,
};

export default WeatherDay;
