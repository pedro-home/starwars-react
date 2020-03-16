import React from 'react';
import { renderWithApp } from '__mocks__/utils/render';

import Search from '../index';

describe('Given <Search />', () => {
  let component;

  describe('When initializes', () => {
    beforeEach(() => {
      const { container } = renderWithApp(<Search />);
      component = container;
    });

    it('Then should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
