import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  API_KEY,
  BASE_URL,
  FIND_CITY,
  GET_WEATHER,
} from './constants';

import {
  startFetching,
  stopFetching,
  receiveError,
  receiveSearched,
  receiveWeather,
} from './actions';

export function* fetchSearched(action) {
  try {
    yield put(startFetching());
    const cities = yield call(
      axios.get,
      `${BASE_URL}/find?APPID=${API_KEY}&cnt=3&q=${action.query}`,
    );
    yield put(stopFetching());
    yield put(receiveSearched(cities.data.list));
  } catch (error) {
    yield put(stopFetching());
    yield put(receiveError(error));
  }
}

export function* fetchWeather(action) {
  try {
    yield put(startFetching());
    const weather = yield call(
      axios.get,
      `${BASE_URL}/forecast?APPID=${API_KEY}&id=${action.id}`,
    );
    yield put(stopFetching());
    yield put(receiveWeather(weather.data));
  } catch (error) {
    yield put(stopFetching());
    yield put(receiveError(error));
  }
}

export default function* watcher() {
  yield [
    takeLatest(FIND_CITY, fetchSearched),
    takeLatest(GET_WEATHER, fetchWeather),
  ];
}
