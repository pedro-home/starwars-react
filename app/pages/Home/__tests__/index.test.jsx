import React from 'react';
import { renderWithApp } from '__mocks__/utils/render';

import Home from '../index';

describe('Given <Home />', () => {
  let component;

  describe('When initializes', () => {
    beforeEach(() => {
      const { container } = renderWithApp(<Home />);
      component = container;
    });

    it('Then should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('And should render a hero section', () => {
      expect(component.querySelector('.section.hero')).toBeTruthy();
    });

    it('And should render a results section', () => {
      expect(component.querySelector('.section.results')).toBeTruthy();
    });
  });
});
