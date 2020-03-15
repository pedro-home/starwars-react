import { takeLatest, call, put } from 'redux-saga/effects';
import fetchData from 'utils/fetch';
import { FETCH_CHARACTERS, STARWARS_API_URL } from './constants';
import { fetchCharactersSuccess, fetchCharactersFailure, fetchCharactersWaiting } from './actions';

export function* fetchCharactersAPI({ payload }) {
  yield put(fetchCharactersWaiting());

  const filter = payload
    ? Object.entries(payload)
        .map(([key, val]) => (val ? `${key}=${val}` : undefined))
        .join('&')
    : '';

  const url = `${STARWARS_API_URL}${filter ? `?${filter}` : ''}`;

  try {
    const { results, next } = yield call(fetchData, url);
    let nextParams;
    if (next) {
      const nextUrl = new URL(next);
      nextParams = Object.fromEntries(nextUrl.searchParams);
    }

    yield put(fetchCharactersSuccess(results, nextParams));
  } catch (err) {
    yield put(fetchCharactersFailure(err.message));
  }
}

function* saga() {
  yield takeLatest(FETCH_CHARACTERS, fetchCharactersAPI);
}

export default saga;
