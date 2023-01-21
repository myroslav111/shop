import { FC } from 'react';

import styles from './Carousel.module.scss';
import CarouselItem from './carousel-item/CarouselItem';
import { IProduct } from '@/types/product.intarface';

const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {

  return (
    <section className={styles.carousel}>
      {products.map((product, index) => (
        <CarouselItem
          product={product}
          key={product.id}
          index={index}
        />
      ))}
    </section>
  );
};

export default Carousel;
