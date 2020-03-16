import React from 'react';
import { render, getByText } from '@testing-library/react';

import Quote from '../index';

describe('Given <Quote />', () => {
  let component;
  let defaultProps;

  beforeAll(() => {
    defaultProps = { text: 'testing' };
  });

  describe('When initializes', () => {
    beforeEach(() => {
      const { container } = render(<Quote {...defaultProps} />);
      component = container;
    });

    it('Then should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('And should render a text', () => {
      expect(getByText(component, defaultProps.text)).toBeTruthy();
    });
  });
});
