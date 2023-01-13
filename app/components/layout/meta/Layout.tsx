import { FC, PropsWithChildren } from 'react';

import Header from '../header/Header';

import styles from './Layout.module.scss';
import Meta from './Meta';
import { ILayout } from './meta.interface';

// const Layout: FC<PropsWithChildren> = ({ children, ...rest }) => {
const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
  return (
    <>
      {/* <Meta {...rest} /> */}
      <div className={styles.layout}>
        <main>
          <Header />
          <section className={styles.content}></section>
        </main>
      </div>
    </>
  );
};

export default Layout;
