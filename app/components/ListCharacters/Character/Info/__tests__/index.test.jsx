import React from 'react';
import { render } from '@testing-library/react';

import Info from '../index';

describe('Given <Info />', () => {
  let component;
  let defaultProps;

  beforeAll(() => {
    defaultProps = { type: 'hello', value: 'world' };
  });

  describe('When initializes', () => {
    beforeEach(() => {
      const { container } = render(<Info {...defaultProps} />);
      component = container;
    });

    it('Then should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('And should render a type', () => {
      expect(component.querySelector('.character-info-type').innerHTML).toEqual(defaultProps.type);
    });

    it('And should render a value', () => {
      expect(component.querySelector('.character-info-value').innerHTML).toEqual(defaultProps.value);
    });
  });
});
