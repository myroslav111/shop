import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './Card.module.scss';

export interface ICard {
  img: string;
  title: string;
  description: string;
  path: string;
  fromPage: string;
}

const Card: FC<ICard> = ({ img, title, description, path, fromPage }) => {
  return (
    <div className={styles.wrapCard}>
      <Image
        className={styles.img}
        src={img}
        alt='Picture of the author'
        width={400}
        height={400}
      />
      <div className={styles.wrapContent}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.paragraf}>{description}</p>
        <Stack direction='row' spacing={4}>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme='teal'
            variant='outline'
          >
            <Link href={path}>{fromPage}</Link>
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Card;
