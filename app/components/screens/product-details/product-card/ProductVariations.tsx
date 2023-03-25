import { FC, useState } from 'react';

import AddToCartlButton from '@/components/ui/catalog/carousel/carousel-item/AddToCartButton';
import SizeVariations from '@/components/ui/catalog/carousel/carousel-item/SizeVariations';

import { TypeSize } from '@/store/cart/cart.types';

import { IProductDetails } from '@/types/product.intarface';

import styles from './ProductCard.module.scss';
import ProductRating from './product-variations/ProductRating';

const ProductVariations: FC<IProductDetails> = ({ product }) => {
  const [drinkTrue, setDrinkTrue] = useState<boolean>(
    product.typeProduct === 'drink'
  );
  const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT');
  return (
    <div className={styles.variations}>
      <ProductRating product={product} />
      {drinkTrue ? (
        <SizeVariations
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
      ) : (
        true
      )}
      <AddToCartlButton
        variant='medium'
        product={product}
        selectedSize={selectedSize}
      />
    </div>
  );
};

export default ProductVariations;
