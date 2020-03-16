import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureStore from 'store';
import Refs from 'contexts/Refs';
import { DEFAULT_REFS } from 'contexts/Refs/constants';

export function renderWithRedux(component, initialState = {}) {
  const store = configureStore(initialState);
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
}

export function renderWithApp(component, initialState = {}, refsValue = DEFAULT_REFS) {
  return renderWithRedux(<Refs.Provider value={refsValue}>{component}</Refs.Provider>, initialState);
}
