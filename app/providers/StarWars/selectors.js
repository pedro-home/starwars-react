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
        height: entry.get('height'),
        mass: entry.get('mass'),
        lastUpdate: entry.get('last_update'),
      }))
      .toJS(),
  );

export { isWaiting, getErrorMessage, getData };
