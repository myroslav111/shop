import { FC } from 'react';

import styles from './ErrorPage.module.scss';

const ErrorPage: FC = () => {
  return (
    <div className={styles.bodyError}>
      <div className={styles.bg}></div>
      <h1 className={styles.text}>404: after 3s will beck to home</h1>
    </div>
  );
};

export default ErrorPage;
