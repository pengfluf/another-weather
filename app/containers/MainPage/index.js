/**
 *
 * MainPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { Switch, Route, Redirect } from 'react-router-dom';

import Welcome from 'components/Welcome';
import Weather from 'components/Weather';

import injectSaga from 'utils/injectSaga';
import makeSelectMainPage from './selectors';
import saga from './saga';

import {
  findCity,
  getWeather,
  updateField,
  updateTimer,
  updateCityId,
} from './actions';

export class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.updateDynamicField = this.updateDynamicField.bind(this);
  }

  updateDynamicField(name, query) {
    const { timer } = this.props.mainPage;

    this.props.updateField(name, query);

    clearInterval(timer);

    this.props.updateTimer(
      setTimeout(() => {
        this.props.findCity(query);
      }, 500),
    );
  }

  render() {
    const { fields, searched, fetching, error } = this.props.mainPage;
    return (
      <Switch>
        <Redirect exact from="/" to="/welcome" />
        <Route
          path="/welcome"
          render={props => (
            <Welcome
              fields={fields}
              searched={searched}
              fetching={fetching}
              updateField={this.props.updateField}
              updateDynamicField={this.updateDynamicField}
              updateCityId={this.props.updateCityId}
              {...props}
            />
          )}
        />
        <Route
          path="/weather"
          render={props => <Weather {...props} />}
        />
      </Switch>
    );
  }
}

MainPage.propTypes = {
  mainPage: PropTypes.shape({
    fields: PropTypes.shape({
      username: PropTypes.string,
      city: PropTypes.string,
    }),
    searched: PropTypes.array,
    timer: PropTypes.number,
  }),
  findCity: PropTypes.func,
  getWeather: PropTypes.func,
  updateField: PropTypes.func,
  updateTimer: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  mainPage: makeSelectMainPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    findCity: query => dispatch(findCity(query)),
    getWeather: id => dispatch(getWeather(id)),
    updateField: (fieldName, query) =>
      dispatch(updateField(fieldName, query)),
    updateTimer: timer => dispatch(updateTimer(timer)),
    updateCityId: id => dispatch(updateCityId(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'mainPage', saga });

export default withRouter(
  compose(
    withSaga,
    withConnect,
  )(MainPage),
);
