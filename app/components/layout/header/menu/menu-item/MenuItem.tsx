import Link from 'next/link';
import { FC } from 'react';

import { IMenuLink } from './menu-item.interface';

interface IMenuItem {
  item: IMenuLink;
}

const MenuItem: FC<IMenuItem> = ({ item }) => {
  return (
    // <li>
    //   <Link href='/'>Navigation</Link>
    // </li>
    <div>{item.name}</div>
  );
};

export default MenuItem;
