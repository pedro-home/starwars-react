import { getCharacterImage, hasEndedScroll } from '../utils';
import maleLogo from '../assets/male.jpg';
import droidLogo from '../assets/droid.jpg';

describe('Given listCharacterUtils', () => {
  describe('When getCharacterImage is called', () => {
    describe('And receives a valid gender', () => {
      let gender;
      beforeEach(() => {
        gender = 'male';
      });

      it('Then should return the corresponding image', () => {
        expect(getCharacterImage(gender)).toEqual(maleLogo);
      });
    });

    describe('And receives an invalid gender', () => {
      let gender;
      beforeEach(() => {
        gender = 'hello';
      });

      it('Then should return the default image', () => {
        expect(getCharacterImage(gender)).toEqual(droidLogo);
      });
    });
  });

  describe('When hasEndedScroll is called', () => {
    describe('And scroll is not in the end', () => {
      it('Then should return false', () => {
        expect(hasEndedScroll(0)).toBeFalsy();
      });
    });

    describe('And scroll is in the end', () => {
      beforeEach(() => {
        window.scrollTo({ top: document.body.scrollHeight });
      });
      it('Then should return true', () => {
        expect(hasEndedScroll(0)).toBeTruthy();
      });

      afterEach(() => {
        window.scrollTo({ top: 0 });
      });
    });

    describe('And uses offset', () => {
      let offset;

      beforeEach(() => {
        offset = 10;
        beforeEach(() => {
          window.scrollTo({ top: document.body.scrollHeight - offset });
        });
      });

      describe('And scroll is not in the end', () => {
        it('Then should return false', () => {
          expect(hasEndedScroll(offset)).toBeFalsy();
        });
      });

      describe('And scroll is in the offset', () => {
        it('Then should return true', () => {
          expect(hasEndedScroll(offset)).toBeTruthy();
        });
      });

      afterEach(() => {
        window.scrollTo({ top: 0 });
      });
    });
  });
});
