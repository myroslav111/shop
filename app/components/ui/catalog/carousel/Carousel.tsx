import { FC } from 'react';

import { useSearch } from '@/layout/header/search/useSearch';

import { IProduct } from '@/types/product.intarface';

import styles from './Carousel.module.scss';
import CarouselItem from './carousel-item/CarouselItem';

const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
  const { value } = useSearch();

  // Логіка фільтру
  const getVisibleProducts = (): IProduct[] => {
    const normalizedFilter = value.toLowerCase();

    return products.filter(product =>
      product.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredByInputProduct: IProduct[] = getVisibleProducts();

  return (
    <section className={styles.carousel}>
      {filteredByInputProduct.map((product, index) => (
        <CarouselItem key={product._id} product={product} index={index} />
      ))}
    </section>
  );
};

export default Carousel;
