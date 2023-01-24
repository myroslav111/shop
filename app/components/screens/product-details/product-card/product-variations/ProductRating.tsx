import { FC, useState } from 'react';
import { Rating } from 'react-simple-star-rating';

import { IProductDetails } from '@/types/product.intarface';

import styles from '../ProductCard.module.scss';

const ProductRating: FC<IProductDetails> = ({ product }) => {
  const [rating, setRating] = useState(
    product.reviews.reduce((acc, review) => acc, 0)
  );

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);

    // other logic
  };
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter');
  const onPointerLeave = () => console.log('Leave');
  const onPointerMove = (value: number, index: number) =>
    console.log(value, index);

  return (
    <div className={styles.rating}>
      <span>Rating:</span>
      <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        initialValue={rating}
        /* Available Props */
        SVGstyle={{
          display: 'inline-block'
        }}
        size={34}
        allowFraction
        transition
      />
    </div>
  );
};
export default ProductRating;
