import { fromJS } from 'immutable';
import { FETCH_CHARACTERS_FAILURE, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_WAITING } from './constants';

export const initialState = fromJS({
  data: [],
  isWaiting: false,
  error: null,
});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CHARACTERS_WAITING:
      return initialState.set('isWaiting', true);

    case FETCH_CHARACTERS_SUCCESS:
      return state.set('isWaiting', false).set('data', fromJS(payload));

    case FETCH_CHARACTERS_FAILURE:
      return state.set('isWaiting', false).set('error', payload);

    default:
      return state;
  }
};

export default reducer;
