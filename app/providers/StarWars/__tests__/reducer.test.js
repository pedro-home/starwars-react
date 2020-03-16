import { fromJS } from 'immutable';
import { NULL_ACTION } from 'providers/__mocks__/actions';
import starWarsReducer, { initialState } from '../reducer';
import { fetchCharactersWaiting, fetchCharactersFailure, fetchCharactersSuccess, resetCharacters } from '../actions';

describe('Given starWarsReducer', () => {
  describe('When initializes', () => {
    it('Then should have an initial state', () => {
      expect(starWarsReducer(undefined, NULL_ACTION)).toEqual(initialState);
    });
  });

  describe('And receives a fetchCharactersSuccess action', () => {
    it('Then should update data', () => {
      let data = [{ test: 'testing', testAgain: 'testing again' }];
      const action = fetchCharactersSuccess(data);
      expect(starWarsReducer(initialState, action)).toEqual(initialState.set('data', fromJS(data)));
    });

    it('And should update next page filter', () => {
      let next = { test: 'testing' };
      const action = fetchCharactersSuccess(undefined, next);
      expect(starWarsReducer(initialState, action)).toEqual(initialState.set('next', fromJS(next)));
    });

    it('And should update isWaiting', () => {
      const action = fetchCharactersSuccess();
      expect(starWarsReducer(initialState, action)).toEqual(initialState.set('isWaiting', false));
    });

    it('And should update error', () => {
      const action = fetchCharactersSuccess();
      expect(starWarsReducer(initialState, action)).toEqual(initialState.set('error', ''));
    });
  });

  describe('And receives a fetchCharactersWaiting action', () => {
    it('Then should update isWaiting', () => {
      const action = fetchCharactersWaiting();
      expect(starWarsReducer(initialState, action)).toEqual(initialState.set('isWaiting', true));
    });
  });

  describe('And receives a fetchCharactersFailure action', () => {
    it('Then should update error', () => {
      let error = 'Ups... Something went wrong again!';
      const action = fetchCharactersFailure(error);
      expect(starWarsReducer(initialState, action)).toEqual(initialState.set('error', error));
    });

    it('And should update isWaiting', () => {
      const action = fetchCharactersFailure();
      expect(starWarsReducer(initialState, action)).toEqual(initialState.set('isWaiting', false));
    });
  });

  describe('And receives a resetCharacters action', () => {
    it('Then should reinitialize', () => {
      const action = resetCharacters();
      expect(starWarsReducer(initialState, action)).toEqual(initialState);
    });
  });
});
