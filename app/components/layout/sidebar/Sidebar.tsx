import logo from '/public/images/products/coffee.png';
import Image from 'next/image';
import { FC } from 'react';

import styles from './Sidebar.module.scss';

const Sidebar: FC = () => {
  return (
    <>
      <div className={styles.sidebarAboutUs}>
        <Image src={logo} width={500} height={500} alt='logo' />
      </div>
    </>
  );
};

export default Sidebar;
