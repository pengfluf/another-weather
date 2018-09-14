/**
 *
 * Weather
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import WeatherDay from 'components/WeatherDay';

class Weather extends React.Component {
  componentDidMount() {
    this.props.getWeather(this.props.cityId);
  }

  render() {
    const { list, city } = this.props.weather;
    if (list) {
      return (
        <div>
          <h1>
            {city.name}, {city.country}
          </h1>
          {list.map(({ day, hours }) => (
            <WeatherDay key={day} day={day} hours={hours} />
          ))}
        </div>
      );
    }
    return null;
  }
}

Weather.propTypes = {
  weather: PropTypes.shape({
    list: PropTypes.array,
    city: PropTypes.shape({
      name: PropTypes.string,
      country: PropTypes.string,
    }),
  }),
  getWeather: PropTypes.func,
  cityId: PropTypes.number,
};

export default Weather;
