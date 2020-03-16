import React from 'react';
import { render } from '@testing-library/react';

import Character from '../index';

describe('Given <Character />', () => {
  let component;
  let defaultProps;

  beforeAll(() => {
    defaultProps = { data: { mass: 10, gender: 'Male' } };
  });

  describe('When initializes', () => {
    beforeEach(() => {
      const { container } = render(<Character {...defaultProps} />);
      component = container;
    });

    it('Then should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('And should render data', () => {
      expect(component.querySelectorAll('.character-entry').length).toEqual(Object.keys(defaultProps.data).length);
    });
  });

  describe('And has a name in data', () => {
    let name;
    beforeEach(() => {
      name = 'joker';
      const { container } = render(<Character {...defaultProps} data={{ ...defaultProps.data, name }} />);
      component = container;
    });

    it('Then should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('Then should render a title', () => {
      const elems = component.querySelectorAll('.character-entry .title');
      expect(elems.length).toEqual(1);
      expect(elems[0].innerHTML).toEqual(name);
    });
  });

  describe('And has an image', () => {
    let imageUrl;
    beforeEach(() => {
      imageUrl = 'testing.png';
      const { container } = render(<Character {...defaultProps} imageUrl={imageUrl} />);
      component = container;
    });

    it('Then should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('Then should render the character image', () => {
      expect(component.querySelector('.character-image').getAttribute('src')).toEqual(imageUrl);
    });
  });
});
