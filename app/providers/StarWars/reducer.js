import { fromJS } from 'immutable';
import {
  FETCH_CHARACTERS_FAILURE,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_WAITING,
  RESET_FETCH_CHARACTERS,
} from './constants';

export const initialState = fromJS({
  data: [],
  next: {},
  isWaiting: false,
  error: undefined,
});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CHARACTERS_WAITING:
      return state.set('isWaiting', true).set('error', initialState.get('error'));

    case FETCH_CHARACTERS_SUCCESS:
      const currData = state.get('data');
      const { data: nextData, next } = payload;
      return state
        .set('isWaiting', false)
        .set('data', currData.merge(fromJS(nextData)))
        .set('next', fromJS(next));

    case FETCH_CHARACTERS_FAILURE:
      return state.set('isWaiting', false).set('error', payload);

    case RESET_FETCH_CHARACTERS:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
