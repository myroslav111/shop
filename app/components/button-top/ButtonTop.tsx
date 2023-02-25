import { FC, useEffect, useState } from 'react';
import { SiAcclaim } from 'react-icons/si';

import styles from './ButtonTop.module.scss';

const ButtonTop: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleIsVisible = (): void => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleIsVisible);

    return () => {
      window.removeEventListener('scroll', toggleIsVisible);
    };
  }, []);

  return (
    <div className={styles.wrpaperButtonTop}>
      <button
        type='button'
        onClick={scrollToTop}
        className={
          isVisible ? styles.visibleButtonTop : styles.notVisibleButtonTop
        }
      >
        <SiAcclaim className={styles.iconButtonTop} aria-hidden='true' />
      </button>
    </div>
  );
};

export default ButtonTop;
