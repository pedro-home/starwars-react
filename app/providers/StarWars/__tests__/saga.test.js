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
    describe('And receiving successfuly content', () => {
      beforeEach(() => {
        recordSaga(fetchCharactersAPI, fetchCharacters);
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
    });

    describe('And receiving an error', () => {
      let headers;
      beforeEach(() => {
        recordSaga(fetchCharactersAPI, fetchCharacters);
        headers = {
          status: 404,
          statusText: 'Not Found',
          headers: {
            'Content-type': 'application/json',
          },
        };

        fetch.mockResponseOnce(undefined, headers);
      });

      it('Then should have next actions', () => {
        expect(nextActions.length).toBeGreaterThanOrEqual(1);
      });

      it('And should have a fetchCharactersWaiting', () => {
        expect(nextActions).toContainEqual(fetchCharactersWaiting());
      });

      it('And should have a fetchCharactersFailure', () => {
        expect(nextActions).toContainEqual(fetchCharactersFailure(`${headers.status}: ${headers.statusText}`));
      });
    });
  });
});
