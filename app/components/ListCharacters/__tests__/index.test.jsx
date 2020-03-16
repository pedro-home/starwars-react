import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ListCharacters from '../index';

describe('Given <ListCharacters />', () => {
  let component;
  let onFetch;
  let scrollWindow;

  beforeAll(() => {
    scrollWindow = () => {
      window.scrollTo({ top: document.body.scrollHeight });
      fireEvent.scroll(window);
    };
  });

  describe('When initializes', () => {
    beforeEach(() => {
      const { container } = render(<ListCharacters />);
      component = container;
    });

    it('Then should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('And should render a center container', () => {
      expect(component.querySelector('.center-container')).toBeTruthy();
    });

    it('And should render a quote', () => {
      expect(component.querySelector('.quote')).toBeTruthy();
    });
  });

  describe('When gets data', () => {
    let data;
    beforeEach(() => {
      data = [{ name: 'Test' }, { name: 'Test2' }];
      const { container } = render(<ListCharacters data={data} />);
      component = container;
    });

    it('Then should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('And should render characters', () => {
      const characters = Array.from(component.querySelectorAll('.character'));
      expect(characters.length).toEqual(data.length);
      expect(characters.map(elem => ({ name: elem.querySelector('.title').innerHTML }))).toStrictEqual(data);
    });
  });

  describe('When fetches data', () => {
    beforeEach(() => {
      onFetch = jest.fn();
    });

    describe('And without next page', () => {
      beforeEach(() => {
        const { container } = render(<ListCharacters fetch={onFetch} />);
        component = container;
        scrollWindow();
      });

      it('Then fetch should not be called', () => {
        expect(onFetch).toHaveBeenCalledTimes(0);
      });
    });

    describe('And during loading', () => {
      beforeEach(() => {
        const { container } = render(<ListCharacters fetch={onFetch} isLoading={true} />);
        component = container;
        scrollWindow();
      });

      it('Then fetch should not be called', () => {
        expect(onFetch).toHaveBeenCalledTimes(0);
      });
    });

    describe('And with next and no loading', () => {
      beforeEach(() => {
        const { container } = render(<ListCharacters fetch={onFetch} isLoading={false} nextFetch={{ page: 2 }} />);
        component = container;
        scrollWindow();
      });

      it('Then fetch should be called', () => {
        expect(onFetch).toHaveBeenCalledTimes(1);
      });
    });

    afterEach(() => {
      window.scrollTo({ top: 0 });
    });
  });

  describe('When is loading', () => {
    beforeEach(() => {
      const { container } = render(<ListCharacters isLoading={true} />);
      component = container;
    });

    it('Then should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('And should render loader', () => {
      expect(component.querySelector('.rs-loader')).toBeTruthy();
    });
  });

  describe('When has an error', () => {
    beforeEach(() => {
      const { container } = render(<ListCharacters error="Ups... This is an error!" data={[{ name: 'Hello' }]} />);
      component = container;
    });

    it('Then should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('And should render a quote', () => {
      expect(component.querySelector('.quote')).toBeTruthy();
    });

    it('And should render no characters', () => {
      expect(component.querySelectorAll('.character').length).toEqual(0);
    });
  });
});
