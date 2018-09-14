/*
 *
 * MainPage reducer
 *
 */

import { fromJS } from 'immutable';

import {
  START_FETCHING,
  STOP_FETCHING,
  RECEIVE_ERROR,
  RECEIVE_SEARCHED,
  RECEIVE_WEATHER,
  UPDATE_FIELD,
  UPDATE_TIMER,
  UPDATE_CITY_ID,
} from './constants';

export const initialState = fromJS({
  cityId: null,
  fields: {
    username: '',
    city: '',
  },
  searched: [],
  weather: {},
  fetching: false,
  error: null,
  timer: null,
});

function mainPageReducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING:
      return state.set('error', null).set('fetching', true);
    case STOP_FETCHING:
      return state.set('fetching', false);
    case RECEIVE_ERROR:
      return state.set('error', fromJS(action.error));
    case RECEIVE_SEARCHED:
      return state.set('searched', fromJS(action.cities));
    case RECEIVE_WEATHER:
      return state.set('weather', fromJS(action.weather));
    case UPDATE_FIELD:
      return state.setIn(['fields', action.fieldName], action.query);
    case UPDATE_TIMER:
      return state.set('timer', action.timer);
    case UPDATE_CITY_ID:
      return state.set('cityId', action.id);
    default:
      return state;
  }
}

export default mainPageReducer;
