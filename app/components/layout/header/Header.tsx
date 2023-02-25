import { FC } from 'react';

import BurgerMenu from '../../burger-menu/BurgerMenu';
import ButtonTop from '../../button-top/ButtonTop';

import styles from './Header.module.scss';
import Cart from './cart/Cart';
import Menu from './menu/Menu';
import Search from './search/Search';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Menu />
      <Search />
      <Cart />
      <BurgerMenu />
      <ButtonTop />
    </header>
  );
};

export default Header;
