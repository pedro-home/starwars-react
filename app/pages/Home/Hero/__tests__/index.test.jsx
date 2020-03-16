import React from 'react';
import { renderWithApp } from '__mocks__/utils/render';

import Hero from '../index';

describe('Given <Hero />', () => {
  let component;

  describe('When initializes', () => {
    beforeEach(() => {
      const { container } = renderWithApp(<Hero />);
      component = container;
    });

    it('Then should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('And should render a center container', () => {
      expect(component.querySelector('.container-center')).toBeTruthy();
    });

    it('And should render a logo', () => {
      expect(component.querySelector('.logo')).toBeTruthy();
    });

    it('And should render a search', () => {
      expect(component.querySelector('.search')).toBeTruthy();
    });
  });
});
