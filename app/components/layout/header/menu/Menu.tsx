import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import MenuItem from './menu-item/MenuItem';
import { menu } from './menu.data';

const Menu: FC = () => {
  return (
    <div>
      <Link href='/'>
        <Image src='/images/logo.png' width={100} height={100} alt='logo' />
      </Link>

      <nav>
        <ul>
          {menu.map(item => (
            <MenuItem key={item.link} item={item} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
