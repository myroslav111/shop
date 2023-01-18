import cn from 'clsx';
import { Dispatch, FC, SetStateAction } from 'react';

import { TypeSize } from '@/store/types';

import { useCart } from '@/hooks/useCart';

import styles from '../Carousel.module.scss';

const SIZES: TypeSize[] = ['SHORT', 'TALL', 'GRANDE', 'VENTI'];

interface ICarouselVariations {
  productId: number;
  selectedSize: TypeSize;
  setSelectedSize: Dispatch<SetStateAction<TypeSize>>;
}

const CarouselVariations: FC<ICarouselVariations> = ({
  productId,
  selectedSize,
  setSelectedSize
}) => {
  const { cart } = useCart();

  return (
    <div className={styles.variations}>
      {SIZES.map(size => (
        <button
          key={size}
          className={cn({
            [styles.active]: selectedSize === size
          })}
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default CarouselVariations;
