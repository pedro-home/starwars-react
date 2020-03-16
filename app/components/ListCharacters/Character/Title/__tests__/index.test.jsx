import React from 'react';
import { render } from '@testing-library/react';

import Title from '../index';

describe('Given <Title />', () => {
  let component;
  let defaultProps;

  beforeAll(() => {
    defaultProps = { text: 'test' };
  });

  describe('When initializes', () => {
    beforeEach(() => {
      const { container } = render(<Title {...defaultProps} />);
      component = container;
    });

    it('Then should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('And should render a text', () => {
      expect(component.querySelector('.title').innerHTML).toEqual(defaultProps.text);
    });
  });
});
