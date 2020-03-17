import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectState = ({ starWars }) => starWars || initialState;

const isWaiting = () => createSelector(selectState, state => state.get('isWaiting'));
const getErrorMessage = () => createSelector(selectState, state => state.get('error'));
const getData = () =>
  createSelector(selectState, state =>
    state
      .get('data')
      .map(entry => ({
        name: entry.get('name'),
        gender: entry.get('gender'),
        height:
          entry.get('height') !== 'unknown'
            ? new Intl.NumberFormat(navigator.language, { style: 'unit', unit: 'meter' }).format(
                entry.get('height') / 100,
              )
            : 'unknown',
        weight:
          entry.get('mass') !== 'unknown'
            ? new Intl.NumberFormat(navigator.language, { style: 'unit', unit: 'kilogram' }).format(entry.get('mass'))
            : 'unknown',
      }))
      .toJS(),
  );

const getNextFetch = () => createSelector(selectState, state => state.get('next').toJS());

export { isWaiting, getErrorMessage, getData, getNextFetch };
