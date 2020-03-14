import {
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_WAITING,
  FETCH_CHARACTERS_FAILURE,
  FETCH_CHARACTERS_SUCCESS,
} from './constants';

export function fetchCharacters(filter) {
  return {
    type: FETCH_CHARACTERS,
    payload: filter,
  };
}

export function fetchCharactersWaiting() {
  return {
    type: FETCH_CHARACTERS_WAITING,
  };
}

export function fetchCharactersSuccess(data) {
  return {
    type: FETCH_CHARACTERS_SUCCESS,
    payload: data,
  };
}

export function fetchCharactersFailure(message) {
  return {
    type: FETCH_CHARACTERS_FAILURE,
    payload: message,
  };
}
