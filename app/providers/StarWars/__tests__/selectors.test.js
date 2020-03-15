import { initialState } from '../reducer';
import { getData, isWaiting, getErrorMessage, getNextFetch } from '../selectors';

describe('Given starWarSelectors', () => {
  describe('When getData is called', () => {
    it('Then should return data value', () => {
      expect(getData().resultFunc(initialState)).toEqual(initialState.get('data').toJS());
    });
  });

  describe('When isWaiting is called', () => {
    it('Then should return isWaiting value', () => {
      expect(isWaiting().resultFunc(initialState)).toEqual(initialState.get('isWaiting'));
    });
  });

  describe('When getErrorMessage is called', () => {
    it('Then should return error value', () => {
      expect(getErrorMessage().resultFunc(initialState)).toEqual(initialState.get('error'));
    });
  });

  describe('When getNextFetch is called', () => {
    it('Then should return next value', () => {
      expect(getNextFetch().resultFunc(initialState)).toEqual(initialState.get('next'));
    });
  });
});
