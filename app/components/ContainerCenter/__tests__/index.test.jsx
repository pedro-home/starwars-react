import React from 'react';
import { render } from '@testing-library/react';

import ContainerCenter from '../index';

describe('Given <ContainerCenter />', () => {
  let component;
  let defaultProps;
  let text;

  describe('When initializes', () => {
    beforeEach(() => {
      text = 'Hello';
      defaultProps = { children: <span>{text}</span> };
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
