import cn from 'clsx';
import { FC } from 'react';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import MenuItem from '@/layout/header/menu/menu-item/MenuItem';

import { COLORS } from '@/config/color.config';

import { menu } from '../layout/header/menu/menu.data';
import BurgerButton from '../ui/burger-button/BurgerButton';

import styles from './BurgerMenu.module.scss';

const BurgerMenu: FC = () => {
  const [burgerMenuVisible, setBurgerMenuVisible] = useState<boolean>(true);
  return (
    <div className={styles.box}>
      <div
        // ! Library Classname (cn)
        className={cn(styles.menu, {
          [styles.active]: !burgerMenuVisible
        })}

        // ! Native JS
        // className={
        //   burgerMenu ? [styles.menu] : [styles.menu, styles.active].join(' ')
        // }
      >
        <BurgerButton
          className={styles.mobileBtnActive}
          state={burgerMenuVisible}
          setState={setBurgerMenuVisible}
        >
          <AiOutlineClose size={25} color={COLORS['dark-green']} />
        </BurgerButton>

        <ul className={styles.menuList}>
          {menu.map(item => (
            <MenuItem key={item.link} item={item} />
          ))}
        </ul>
      </div>

      <BurgerButton state={burgerMenuVisible} setState={setBurgerMenuVisible}>
        <AiOutlineMenu size={25} color={COLORS['dark-green']} />
      </BurgerButton>
    </div>
  );
};

export default BurgerMenu;
