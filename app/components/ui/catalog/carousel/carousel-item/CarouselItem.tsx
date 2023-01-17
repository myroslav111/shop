import cn from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

import styles from '../Carousel.module.scss';

import { IProduct } from '@/types/product.intarface';

const CarouselItem: FC<{ product: IProduct }> = ({ product }) => {
  const isActive = product.id === 2;

  return (
    <div
      //либа clsx если елемент активен то к нему добавляется клас styles.item
      className={cn(styles.item, {
        [styles.active]: isActive
      })}
    >
      <div>
        <Image
          className={styles.image}
          alt={product.name}
          src={product.images[0]}
          width={350}
          height={350}
        />
        <div className={styles.heading}>
          <div>{product.name}</div>
        </div>

        {!isActive && (
          <div className={styles.description}>{product.description}</div>
        )}
      </div>
    </div>
  );
};

export default CarouselItem;
