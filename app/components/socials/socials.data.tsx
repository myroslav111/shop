import { BsTelephone } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';
import { TbBrandTelegram } from 'react-icons/tb';

import { ISocialsInfo } from '../../types/socials.interface';

export const socialsData: ISocialsInfo[] = [
  {
    path: 'https://t.me/myroslav1111',
    icon: <TbBrandTelegram />
  },
  {
    path: 'tel:+380681983451',
    icon: <BsTelephone />
  },
  {
    path: 'https://www.linkedin.com/in/myroslav-kozar/',
    icon: <SlSocialLinkedin />
  },
  {
    path: 'https://github.com/myroslav111',
    icon: <FiGithub />
  }
];
