import { FC, useState } from 'react';

import { IInfoText } from '@/types/text-info.interface';

import styles from './AccordionText.module.scss';

const AccordionText: FC<IInfoText> = ({ primary, secondary, className }) => {
  const [dots, setDots] = useState<boolean>(true);

  const toogleChecked = () => {
    setDots(!dots);
  };

  return (
    <>
      <p className={className}>
        {primary}
        <span
          className={
            dots ? styles.isVisibleAccordionText : styles.isHiddenAccordionText
          }
        >
          ...
        </span>
        <span
          className={
            dots ? styles.isHiddenAccordionText : styles.isVisibleAccordionText
          }
        >
          {secondary}
        </span>
        <button
          type='button'
          onClick={toogleChecked}
          className={styles.readMoreBtnAccordionText}
        >
          {dots ? 'Read More' : 'Read Less'}
        </button>
      </p>
    </>
  );
};

export default AccordionText;
