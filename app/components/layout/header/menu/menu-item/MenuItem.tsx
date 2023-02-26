import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import styles from './MenuItem.module.scss';
import { IMenuLink } from './menu-item.interface';

interface IMenuItem {
  item: IMenuLink;
}

const MenuItem: FC<IMenuItem> = ({ item }) => {
  const { pathname } = useRouter();
  const currentPage = pathname === item.link;

  return (
    <li className={currentPage ? styles.active : ''}>
      <Link href={item.link}>{item.name}</Link>
    </li>
  );
};

export default MenuItem;
