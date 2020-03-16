import { fromJS } from 'immutable';
import { initialState } from '../reducer';
import { getData, isWaiting, getErrorMessage, getNextFetch } from '../selectors';

describe('Given starWarSelectors', () => {
  describe('When getData is called', () => {
    it('Then should return data value', () => {
      const data = [
        {
          name: 'Test',
          gender: 'male',
          testing: true,
          mass: 100,
          height: 20,
        },
        {
          name: 'Test2',
          gender: 'female',
          testing: false,
          mass: 205,
          height: 21,
        },
        {
          name: 'Test3',
          gender: 'droid',
          testing: true,
          mass: 'unknown',
          height: 'unknown',
        },
      ];

      const result = data.map(val => ({
        gender: val.gender,
        name: val.name,
        weight:
          val.mass !== 'unknown'
            ? new Intl.NumberFormat(navigator.language, { style: 'unit', unit: 'kilogram' }).format(val.mass)
            : 'unknown',
        height:
          val.height !== 'unknown'
            ? new Intl.NumberFormat(navigator.language, { style: 'unit', unit: 'meter' }).format(val.height / 100)
            : 'unknown',
      }));

      expect(getData().resultFunc(initialState.set('data', fromJS(data)))).toEqual(result);
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
