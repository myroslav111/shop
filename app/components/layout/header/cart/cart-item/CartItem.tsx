import Image from 'next/image';
import { FC } from 'react';

// import styles from './CartItem.module.scss';
import styles from '../Cart.module.scss';

import CartActions from './cart-actions/CartActions';
import { ICartItem } from '@/types/cart-item.interface';

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
  return (
    <div className={styles.item}>
      <Image
        src={item.product.images[0]}
        width={100}
        height={100}
        alt={item.product.name}
      />
      <div>
        <div className={styles.name}>{item.product.name}</div>
        <div className={styles.price}>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(item.product.price)}
        </div>
        <CartActions item={item} />
      </div>
    </div>
  );
};

export default CartItem;
