import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithApp } from '__mocks__/utils/render';
import Search from '../index';

describe('Given <Search />', () => {
  let component;
  let defaultProps;
  let onFetch;
  let onReset;
  let clickButton;
  let pressEnterInput;
  let changeInput;

  beforeAll(() => {
    clickButton = comp => {
      const btn = comp.querySelector('.rs-btn');
      fireEvent.click(btn);
    };

    pressEnterInput = comp => {
      const inp = comp.querySelector('.rs-input');
      fireEvent.keyDown(inp, { key: 'Enter', code: 'Enter', keyCode: 13, charCode: 13 });
    };

    changeInput = (comp, value = 'test') => {
      const inp = comp.querySelector('.rs-input');
      fireEvent.change(inp, { target: { value } });
    };

    defaultProps = { fetch: () => {} };
  });

  describe('When initializes', () => {
    beforeEach(() => {
      const { container } = renderWithApp(<Search {...defaultProps} />);
      component = container;
    });

    it('Then should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('And should render an input', () => {
      expect(component.querySelector('.rs-input')).toBeTruthy();
    });

    it('And should render a button', () => {
      expect(component.querySelector('.rs-btn')).toBeTruthy();
    });
  });

  describe('And clicks on button', () => {
    describe('And with no results section', () => {
      beforeEach(() => {
        onFetch = jest.fn();
        onReset = jest.fn();
        const { container } = renderWithApp(<Search fetch={onFetch} reset={onReset} />);
        component = container;

        clickButton(component);
      });

      it('Then should not call fetch', () => {
        expect(onFetch).not.toBeCalled();
      });

      it('And should call reset', () => {
        expect(onReset).toHaveBeenCalledTimes(1);
      });
    });

    describe('And with results section', () => {
      let onScroll;
      let value;

      beforeEach(() => {
        value = 'testing';
        onFetch = jest.fn();
        onReset = jest.fn();
        onScroll = jest.spyOn(window, 'scrollTo');
        const { container } = renderWithApp(<Search fetch={onFetch} reset={onReset} />, undefined, { results: true });
        component = container;
        changeInput(component, value);
        clickButton(component);
      });

      it('Then should call fetch with value', () => {
        expect(onFetch).toHaveBeenCalledTimes(1);
        expect(onFetch).toHaveBeenCalledWith({ search: value });
      });

      it('And should call reset', () => {
        expect(onReset).toHaveBeenCalledTimes(1);
      });

      it('And should scroll to results section', () => {
        expect(onScroll).toHaveBeenCalledTimes(1);
      });

      afterEach(() => {
        onScroll.mockRestore();
      });
    });
  });

  describe('And presses enter on input', () => {
    describe('And with no results section', () => {
      beforeEach(() => {
        onFetch = jest.fn();
        onReset = jest.fn();
        const { container } = renderWithApp(<Search fetch={onFetch} reset={onReset} />);
        component = container;

        pressEnterInput(component);
      });

      it('Then should not call fetch', () => {
        expect(onFetch).not.toBeCalled();
      });

      it('And should call reset', () => {
        expect(onReset).toHaveBeenCalledTimes(1);
      });
    });

    describe('And with results section', () => {
      let onScroll;
      let value;

      beforeEach(() => {
        value = 'testing';
        onFetch = jest.fn();
        onReset = jest.fn();
        onScroll = jest.spyOn(window, 'scrollTo');
        const { container } = renderWithApp(<Search fetch={onFetch} reset={onReset} />, undefined, { results: true });
        component = container;
        changeInput(component, value);
        pressEnterInput(component);
      });

      it('Then should call fetch with value', () => {
        expect(onFetch).toHaveBeenCalledTimes(1);
        expect(onFetch).toHaveBeenCalledWith({ search: value });
      });

      it('And should call reset', () => {
        expect(onReset).toHaveBeenCalledTimes(1);
      });

      it('And should scroll to results section', () => {
        expect(onScroll).toHaveBeenCalledTimes(1);
      });

      afterEach(() => {
        onScroll.mockRestore();
      });
    });
  });
});
