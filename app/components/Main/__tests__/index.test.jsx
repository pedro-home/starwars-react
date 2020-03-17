import React from 'react';
import { renderWithRedux } from '__mocks__/utils/render';

import Main from '../index';

describe('Given <Main />', () => {
  let component;

  describe('When initializes', () => {
    beforeEach(() => {
      const { container } = renderWithRedux(<Main />);
      component = container;
    });

    it('Then should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('And should render a container', () => {
      expect(component.querySelector('.rs-container')).toBeTruthy();
    });

    it('And should render the home page', () => {
      expect(component.querySelector('.home')).toBeTruthy();
    });
  });
});
