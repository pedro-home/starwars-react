import femaleLogo from './assets/female.jpg';
import maleLogo from './assets/male.jpg';
import hermaphroditeLogo from './assets/hermaphrodite.jpg';
import droidLogo from './assets/droid.jpg';
import { OFFSET_SCROLL } from './constants';

export const getCharacterImage = name => {
  let logo;
  switch (name) {
    case 'female':
      logo = femaleLogo;
      break;
    case 'male':
      logo = maleLogo;
      break;
    case 'hermaphrodite':
      logo = hermaphroditeLogo;
      break;
    default:
      logo = droidLogo;
  }

  return logo;
};

export const hasEndedScroll = (offset = OFFSET_SCROLL) => {
  return window.scrollY + window.innerHeight >= document.body.scrollHeight - offset;
};
