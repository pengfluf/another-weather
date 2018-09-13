/*
 *
 * MainPage actions
 *
 */

import {
  START_FETCHING,
  STOP_FETCHING,
  FIND_CITY,
  GET_WEATHER,
  RECEIVE_ERROR,
  RECEIVE_SEARCHED,
  RECEIVE_WEATHER,
  UPDATE_FIELD,
  UPDATE_TIMER,
  UPDATE_CITY_ID,
} from './constants';

export function startFetching() {
  return {
    type: START_FETCHING,
  };
}

export function stopFetching() {
  return {
    type: STOP_FETCHING,
  };
}

export function findCity(query) {
  return {
    type: FIND_CITY,
    query,
  };
}

export function getWeather(id) {
  return {
    type: GET_WEATHER,
    id,
  };
}

export function receiveError(error) {
  return {
    type: RECEIVE_ERROR,
    error,
  };
}

export function receiveSearched(cities) {
  return {
    type: RECEIVE_SEARCHED,
    cities,
  };
}

export function receiveWeather(weather) {
  return {
    type: RECEIVE_WEATHER,
    weather,
  };
}

export function updateField(fieldName, query) {
  return {
    type: UPDATE_FIELD,
    fieldName,
    query,
  };
}

export function updateTimer(timer) {
  return {
    type: UPDATE_TIMER,
    timer,
  };
}

export function updateCityId(id) {
  return {
    type: UPDATE_CITY_ID,
    id,
  };
}
