import { FC } from 'react';

import styles from './Socials.module.scss';
import { socialsData } from './socials.data';

const Socials: FC = () => {
  return (
    <>
      <div className={styles.socialWrapper}>
        <ul className={styles.socialList}>
          {socialsData.map((socialItems, idx) => (
            <li key={idx} className={styles.socialItem}>
              <a href={socialItems.path} target={'_blanc'}>
                {socialItems.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Socials;
