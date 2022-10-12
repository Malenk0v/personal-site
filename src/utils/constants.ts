import avatarPhoto from '../img/myPhotos/avatar.jpg';

import facebook from '../img/icons/facebook.svg';
import github from '../img/icons/github.svg';
import telegram from '../img/icons/reshot-icon-telegram-LSZVDUKX6M.svg';
import instagram from '../img/icons/instagram.svg';
import linkedIN from '../img/icons/linkedIN.svg';

import iAndCacke from '../img/myPhotos/iandcacke.jpg';
import maskFace from '../img/myPhotos/maskFace.jpg';
import med from '../img/myPhotos/med.jpg';
import airport from '../img/myPhotos/IandWifiAir.jpg';
import pu1 from '../img/myPhotos/pu1.jpg';
import pu2 from '../img/myPhotos/put2.jpg';
import pu3 from '../img/myPhotos/put3.jpg';
import pu4 from '../img/myPhotos/put4.jpg';

export const routersHome = ['/', 'home', 'malenkovgleb'];
export const routerProfile = '/profile';
export const avatar = {
  url: avatarPhoto,
  alt: 'Malenkov Gleb',
};
export const myPhoto = {
  maskFace: maskFace,
  iCacke: iAndCacke,
  med: med,
  airport: airport,
  put: [pu1, pu2, pu3, pu4],
};

export const navIcons = [
  {
    urlPhoto: facebook,
    url: 'https://www.facebook.com/malenkov.official/',
    alt: 'facebook',
  },
  {
    urlPhoto: github,
    url: 'https://github.com/Malenk0v',
    alt: 'github',
  },
  {
    urlPhoto: instagram,
    url: 'https://www.instagram.com/malenkov.gl/',
    alt: 'instagram',
  },
  {
    urlPhoto: linkedIN,
    url: 'https://www.linkedin.com/in/gmalenkov/',
    alt: 'linkedIN',
  },
  {
    urlPhoto: telegram,
    url: 'https://www.linkedin.com/in/gmalenkov/',
    alt: 'Telegram',
  },
];

export const navProfile = [
  {
    title: 'About me',
    router: '/aboutme',
  },
  {
    title: 'Projects',
    router: '/projects',
  },
];
