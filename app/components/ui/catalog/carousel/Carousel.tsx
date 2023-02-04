import { FC } from 'react';

import { IProduct } from '@/types/product.intarface';

import styles from './Carousel.module.scss';
import CarouselItem from './carousel-item/CarouselItem';

const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
  return (
    <section className={styles.carousel}>
      {products.map((product, index) => (
        <CarouselItem key={product._id} product={product} index={index} />
      ))}
    </section>
  );
};

export default Carousel;
