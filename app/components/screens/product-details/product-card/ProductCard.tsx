import { FC } from 'react';

import { IProductDetails } from '@/types/product.intarface';

import styles from './ProductCard.module.scss';
import ProductImage from './ProductImage';
import ProductInformation from './ProductInformation';
import ProductVariations from './ProductVariations';

const ProductCard: FC<IProductDetails> = ({ product }) => {
  return (
    <div className={styles.card}>
      <ProductInformation product={product} />
      <ProductImage product={product} />
      <ProductVariations product={product} />
    </div>
  );
};

export default ProductCard;
