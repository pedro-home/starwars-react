import React from 'react';
import { renderWithApp } from '__mocks__/utils/render';

import ListCharacters from '../index';

describe('Given <ListCharacters />', () => {
  let component;

  describe('When initializes', () => {
    beforeEach(() => {
      const { container } = renderWithApp(<ListCharacters />);
      component = container;
    });

    it('Then should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
