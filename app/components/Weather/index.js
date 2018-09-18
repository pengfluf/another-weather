/**
 *
 * Weather
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import WeatherDay from 'components/WeatherDay';
import Loading from 'components/01-ui/Loading';
import CenteringContainer from 'components/01-ui/CenteringContainer';

import Wrapper from './styled/Wrapper';
import Title from './styled/Title';

class Weather extends React.Component {
  componentDidMount() {
    if (this.props.cityId) {
      this.props.getWeather(this.props.cityId);
    } else {
      this.props.history.push('/welcome');
    }
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
        <CenteringContainer>
          <Wrapper>
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
            <Title>
              {city.name}, {city.country}
            </Title>
            {list.map(({ day, hours }) => (
              <WeatherDay key={day} day={day} hours={hours} />
            ))}
          </Wrapper>
        </CenteringContainer>
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
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default Weather;
