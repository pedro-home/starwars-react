import { takeLatest, call, put } from 'redux-saga/effects';
import fetchData from 'utils/fetch';
import { FETCH_CHARACTERS, STARWARS_API_URL } from './constants';
import { fetchCharactersSuccess, fetchCharactersFailure, fetchCharactersWaiting } from './actions';

function* fetchCharacters({ payload }) {
  yield put(fetchCharactersWaiting());

  const url = `${STARWARS_API_URL}${payload ? `?search=${payload}` : ''}`;

  try {
    const data = yield call(fetchData, url);
    yield put(fetchCharactersSuccess(data.results));
  } catch (err) {
    yield put(fetchCharactersFailure(err.message));
  }
}

function* saga() {
  yield takeLatest(FETCH_CHARACTERS, fetchCharacters);
}

export default saga;
