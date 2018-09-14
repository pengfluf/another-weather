/**
 *
 * Weather
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import WeatherDay from 'components/WeatherDay';
import Loading from 'components/Loading';

class Weather extends React.Component {
  componentDidMount() {
    this.props.getWeather(this.props.cityId);
  }

  render() {
    const { list, city } = this.props.weather;
    const {
      fields,
      searched,
      fetching,
      cityId,
      updateField,
      updateDynamicField,
      updateCityId,
      getWeather,
    } = this.props;
    if (list) {
      return (
        <div>
          <Header
            fields={fields}
            searched={searched}
            fetching={fetching}
            cityId={cityId}
            updateField={updateField}
            updateDynamicField={updateDynamicField}
            updateCityId={updateCityId}
            getWeather={getWeather}
          />
          <h1>
            {city.name}, {city.country}
          </h1>
          {list.map(({ day, hours }) => (
            <WeatherDay key={day} day={day} hours={hours} />
          ))}
        </div>
      );
    }
    return <Loading />;
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

export default Weather;
