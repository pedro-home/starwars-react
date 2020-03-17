import React from 'react';
import { render } from '@testing-library/react';

import Page from '../index';

describe('Given <Page />', () => {
  let component;
  let defaultProps;
  let text;
  let name;

  beforeAll(() => {
    text = 'Hello';
    name = 'TestPage';
    defaultProps = { children: <span>{text}</span>, name };
  });

  describe('When initializes', () => {
    beforeEach(() => {
      const { container } = render(<Page {...defaultProps} />);
      component = container;
    });

    it('Then should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('And should render children', () => {
      expect(component.querySelector('span').innerHTML).toEqual(text);
    });

    it('And should render class name with name', () => {
      expect(component.querySelector('.page').classList).toContainEqual(name);
    });
  });
});
