import { runSaga } from 'redux-saga';
import { fetchCharactersAPI } from '../saga';
import { fetchCharacters, fetchCharactersWaiting, fetchCharactersSuccess, fetchCharactersFailure } from '../actions';

describe('Given starWarSaga', () => {
  let recordSaga;
  let nextActions;

  beforeAll(() => {
    recordSaga = (saga, action) => {
      nextActions = [];

      runSaga(
        {
          dispatch: newAction => nextActions.push(newAction),
        },
        saga,
        action,
      );
    };
  });

  describe('When fetchCharactersAPI is called', () => {
    beforeEach(() => {
      recordSaga(fetchCharactersAPI, fetchCharacters);
    });

    it('Then should fetch api content', () => {
      expect(true).toEqual(false);
    });

    it('And should have next actions', () => {
      expect(nextActions.length).toBeGreaterThanOrEqual(1);
    });

    it('And should have a fetchCharactersWaiting', () => {
      expect(nextActions).toContainEqual(fetchCharactersWaiting());
    });

    it('And should have a fetchCharactersSuccess', () => {
      expect(nextActions).toContainEqual(fetchCharactersSuccess());
    });

    it('And should have a fetchCharactersFailure', () => {
      expect(nextActions).toContainEqual(fetchCharactersFailure());
    });
  });
});
