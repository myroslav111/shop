import cn from 'clsx';
import { useRouter } from 'next/router';
import { Dispatch, FC, SetStateAction } from 'react';

import { TypeSize } from '@/store/cart/cart.types';

// import { useCart } from '@/hooks/useCart';
import styles from '../Carousel.module.scss';

const SIZES: TypeSize[] = ['SHORT', 'TALL', 'GRANDE', 'VENTI'];

interface ICarouselVariations {
  selectedSize: TypeSize;
  setSelectedSize: Dispatch<SetStateAction<TypeSize>>;
  variant?: 'small' | 'medium';
}

const SizeVariations: FC<ICarouselVariations> = ({
  selectedSize,
  setSelectedSize,
  variant = 'small'
}) => {
  // const { cart } = useCart();
  // const router = useRouter();

  return (
    //cn добавляет еще один клас если выполняется условие
    <div
      className={cn(styles.variations, {
        [styles.medium]: variant === 'medium'
      })}
    >
      {SIZES.map(size => (
        <button
          key={size}
          className={cn({
            [styles.active]: selectedSize === size
            // [styles.productDetailsCardStyle]: extendStyle
            // router.pathname === '/product/[slug]'
          })}
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeVariations;
