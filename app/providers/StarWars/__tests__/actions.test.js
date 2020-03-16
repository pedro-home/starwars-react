import {
  fetchCharacters,
  fetchCharactersWaiting,
  resetCharacters,
  fetchCharactersFailure,
  fetchCharactersSuccess,
} from '../actions';
import {
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_WAITING,
  RESET_FETCH_CHARACTERS,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
} from '../constants';

describe('Given starWarsActions', () => {
  describe('When fetchCharacters is called without arguments', () => {
    it('Then should create a fetchCharacters action', () => {
      const action = {
        type: FETCH_CHARACTERS,
      };

      expect(fetchCharacters()).toEqual(action);
    });
  });

  describe('And fetchCharacters is called with arguments', () => {
    let filter;
    beforeEach(() => {
      filter = { test: 'testing' };
    });

    it('Then should create a fetchCharacters action', () => {
      const action = {
        type: FETCH_CHARACTERS,
        payload: filter,
      };

      expect(fetchCharacters(filter)).toEqual(action);
    });
  });
  describe('When fetchCharactersSuccess is called without arguments', () => {
    it('Then should create a fetchCharactersSuccess action', () => {
      const action = {
        type: FETCH_CHARACTERS_SUCCESS,
        payload: {
          data: [],
          next: {},
        },
      };

      expect(fetchCharactersSuccess()).toEqual(action);
    });
  });

  describe('When fetchCharactersSuccess is called with arguments', () => {
    let data;
    let next;
    beforeEach(() => {
      data = [{ test: 'testing' }, { testAgain: 'testing again' }];
      next = { test: 'testing' };
    });

    it('Then should create a fetchCharactersSuccess action', () => {
      const action = {
        type: FETCH_CHARACTERS_SUCCESS,
        payload: { data, next },
      };

      expect(fetchCharactersSuccess(data, next)).toEqual(action);
    });
  });

  describe('When fetchCharactersFailure is called without arguments', () => {
    it('Then should create a fetchCharactersFailure action', () => {
      const action = {
        type: FETCH_CHARACTERS_FAILURE,
        payload: '',
      };

      expect(fetchCharactersFailure()).toEqual(action);
    });
  });

  describe('When fetchCharactersFailure is called with arguments', () => {
    let error;
    beforeEach(() => {
      error = 'Ups... Something went wrong.';
    });

    it('Then should create a fetchCharactersFailure action', () => {
      const action = {
        type: FETCH_CHARACTERS_FAILURE,
        payload: error,
      };

      expect(fetchCharactersFailure(error)).toEqual(action);
    });
  });

  describe('When fetchCharactersWaiting is called', () => {
    it('Then should create a fetchCharactersWaiting action', () => {
      const action = {
        type: FETCH_CHARACTERS_WAITING,
      };

      expect(fetchCharactersWaiting()).toEqual(action);
    });
  });

  describe('When resetCharacters is called', () => {
    it('Then should create a resetCharacters action', () => {
      const action = {
        type: RESET_FETCH_CHARACTERS,
      };

      expect(resetCharacters()).toEqual(action);
    });
  });
});
