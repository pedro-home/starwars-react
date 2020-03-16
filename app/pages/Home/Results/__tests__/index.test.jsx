import React from 'react';
import { renderWithApp } from '__mocks__/utils/render';

import Results from '../index';

describe('Given <Results />', () => {
  let component;

  describe('When initializes', () => {
    beforeEach(() => {
      const { container } = renderWithApp(<Results />);
      component = container;
    });

    it('Then should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('And should render a quote', () => {
      expect(component.querySelector('.quote')).toBeTruthy();
    });
  });
});
