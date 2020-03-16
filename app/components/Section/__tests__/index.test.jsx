import React from 'react';
import { render } from '@testing-library/react';

import Section from '../index';

describe('Given <Section />', () => {
  let component;
  let defaultProps;
  let text;
  let name;

  beforeAll(() => {
    text = 'Hello';
    name = 'TestSection';
    defaultProps = { children: <span>{text}</span>, name };
  });

  describe('When initializes', () => {
    beforeEach(() => {
      const { container } = render(<Section {...defaultProps} />);
      component = container;
    });

    it('Then should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('And should render children', () => {
      expect(component.querySelector('span').innerHTML).toEqual(text);
    });

    it('And should render class name with name', () => {
      expect(component.querySelector('.section').classList).toContainEqual(name);
    });
  });

  describe('When references component', () => {
    let ref;
    beforeEach(() => {
      const { container } = render(
        <Section
          {...defaultProps}
          onRef={elem => {
            ref = elem;
          }}
        />,
      );
      component = container;
    });

    it('Then should return DOM element', () => {
      expect(ref.classList).toContainEqual('section');
    });
  });
});
