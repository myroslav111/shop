import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import { FC } from 'react';

import { useActions } from '@/hooks/useActions';

import styles from '../carousel-navigations/CarouselNavigation.module.scss';
import { ICarouselNavigation } from '../carousel.iterface';

const CarouselNavigation: FC<ICarouselNavigation> = ({
  product,
  isActive,
  onSelectSlide,
  products
}) => {
  const { prevSlide, nextSlide } = useActions();
  // console.log(products?.length);
  return (
    <div className={styles.navigation}>
      <div>
        {isActive && (
          <div className={styles.arrows}>
            <button className={styles.arrow} onClick={() => prevSlide()}>
              <ChevronLeftIcon fontSize={46} />
            </button>
            <button
              className={styles.arrow}
              onClick={() =>
                nextSlide({ carouselLength: products?.length || 10 })
              }
            >
              <ChevronRightIcon fontSize={46} />
            </button>
          </div>
        )}
      </div>
      <button onClick={onSelectSlide} className={styles.image}>
        <Image
          // className={styles.image}
          alt={product.name}
          src={product.images[0]}
          width={300}
          height={300}
          draggable={false}
        />
      </button>
    </div>
  );
};

export default CarouselNavigation;
