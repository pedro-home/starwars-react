import React from 'react';
import { render } from '@testing-library/react';

import ContainerCenter from '../index';

describe('Given <ContainerCenter />', () => {
  let component;
  let defaultProps;
  let text;

  beforeAll(() => {
    text = 'Hello';
    defaultProps = { children: <span>{text}</span> };
  });

  describe('When initializes', () => {
    beforeEach(() => {
      const { container } = render(<ContainerCenter {...defaultProps} />);
      component = container;
    });

    it('Then should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('And should render children', () => {
      expect(component.querySelector('span').innerHTML).toEqual(text);
    });
  });
});
