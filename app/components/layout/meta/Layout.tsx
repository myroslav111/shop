import { FC, PropsWithChildren } from 'react';

import Header from '../header/Header';

import styles from './Layout.module.scss';
import Meta from './Meta';
import { ISeo } from './meta.interface';

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
  return (
    <>
      <Meta {...rest} />
      <div className={styles.layout}>
        <main>
          <Header />
          <section className={styles.content}>{children}</section>
        </main>
      </div>
    </>
  );
};

export default Layout;
