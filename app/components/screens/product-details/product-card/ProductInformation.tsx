import Image from 'next/image';
import { FC } from 'react';

import { IProductDetails } from '@/types/product.intarface';

import styles from './ProductCard.module.scss';

const ProductInformation: FC<IProductDetails> = ({ product }) => {
  return (
    <div className={styles.information}>
      <h1>{product.name}</h1>
      <div>
        <p>{product.description}</p>
      </div>
      {product.images.map(image => (
        <button key={image}>
          <Image src={image} alt='' width={70} height={70} />
        </button>
      ))}
    </div>
  );
};

export default ProductInformation;
