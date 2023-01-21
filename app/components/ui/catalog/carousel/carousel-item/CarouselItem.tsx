import cn from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC, useState } from 'react';

import { TypeSize } from '@/store/cart/cart.types';

import { useActions } from '@/hooks/useActions';

import styles from '../Carousel.module.scss';
import { useCarousel } from '../useCarousel';

import CarouselButton from './CarouselButton';
import CarouselVariations from './CarouselVariations';
import CarouselNavigation from './carousel-navigations/CarouselNavigation';
import { ICarouselItem } from './carousel.iterface';

const CarouselItem: FC<ICarouselItem> = ({ product, index }) => {
  const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT');

  const { selectedItemIndex } = useCarousel();
  const { selectSlide } = useActions();

  const isActive = index === selectedItemIndex;
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={isActive ? { scale: 1.12 } : {}}
      transition={{ duration: 0.7, type: 'tween' }}
      //либа clsx если елемент активен то к нему добавляется клас styles.item
      className={cn(styles.item, {
        [styles.active]: isActive
      })}
      aria-label='Select item'
      role='button'
    >
      <div>
        <CarouselNavigation
          onSelectSlide={() => selectSlide(index)}
          product={product}
          isActive={isActive}
        />

        <button className={styles.heading} onClick={() => selectSlide(index)}>
          <span>{product.name}</span>
        </button>

        {isActive ? (
          <>
            <CarouselVariations
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
            <CarouselButton product={product} selectedSize={selectedSize} />
            <Link href={`/product/${product.slug}`} className={styles.link}>
              More information
            </Link>
          </>
        ) : (
          <div className={styles.description}>{product.description}</div>
        )}
      </div>
    </motion.div>
  );
};

export default CarouselItem;
