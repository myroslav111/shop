import { FC } from 'react';

import styles from './ButtonForm.module.scss';

const ButtonForm: FC = () => {
  return (
    <button className={styles.button} type='submit'>
      Send
    </button>
  );
};

export default ButtonForm;
