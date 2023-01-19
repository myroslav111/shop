import { FC } from 'react';

import styles from './Carousel.module.scss';
import CarouselItem from './carousel-item/CarouselItem';
import { IProduct } from '@/types/product.intarface';

const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
  // const [selectedItemIndex, setSelectedItemIndex] = useState(1);

  // const nextHandler = () => {
  //   selectedItemIndex !== products.length - 1 &&
  //     setSelectedItemIndex(selectedItemIndex + 1);
  // };

  // const prevHandler = () => {
  //   selectedItemIndex > 0 && setSelectedItemIndex(selectedItemIndex - 1);
  // };

  return (
    <section className={styles.carousel}>
      {products.map((product, index) => (
        <CarouselItem
          product={product}
          key={product.id}
          // selectedItemIndex={selectedItemIndex}
          // setSelectedItemIndex={setSelectedItemIndex}
          // isActive={index === selectedItemIndex}
          // selectItem={() => setSelectedItemIndex(index)}
          // nextHandler={nextHandler}
          // prevHandler={prevHandler}
          index={index}
        />
      ))}
    </section>
  );
};

export default Carousel;
