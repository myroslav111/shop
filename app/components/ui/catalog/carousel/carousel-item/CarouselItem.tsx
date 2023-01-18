import { Button } from '@chakra-ui/react';
import cn from 'clsx';
import Image from 'next/image';
import { FC, useState } from 'react';

import { COLORS } from '@/config/color.config';

import { TypeSize } from '@/store/types';

import { useActions } from '@/hooks/useActions';

import styles from '../Carousel.module.scss';

import CarouselButton from './CarouselButton';
import CarouselVariations from './CarouselVariations';
import { IProduct } from '@/types/product.intarface';

const CarouselItem: FC<{ product: IProduct }> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT');
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

        {isActive ? (
          <>
            <CarouselVariations
              productId={product.id}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
            <CarouselButton product={product} selectedSize={selectedSize} />
          </>
        ) : (
          <div className={styles.description}>{product.description}</div>
        )}
      </div>
    </div>
  );
};

export default CarouselItem;
