import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay
} from '@chakra-ui/react';
import { FC, useRef, useState } from 'react';

import { useCart } from '@/hooks/useCart';

import { formatToCurency } from '@/utils/format-to-currency';

import styles from './Cart.module.scss';
import CartItem from './cart-item/CartItem';

const Cart: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const { cart, total } = useCart();

  return (
    <div className={styles['wrapper-cart']}>
      <button
        className={styles.heading}
        onClick={e => setIsOpen(!isOpen)}
        ref={btnRef}
      >
        <span className={styles.badge}>{cart.length}</span>
        <span className={styles.text}>MY BASKET</span>
      </button>
      {isOpen && (
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={() => setIsOpen(false)}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>My basket</DrawerHeader>

            <DrawerBody>
              <div className={styles.cart}>
                {cart.length ? (
                  cart.map(item => <CartItem item={item} key={item.id} />)
                ) : (
                  <div>Basket is empty</div>
                )}
              </div>
            </DrawerBody>

            <DrawerFooter
              borderTopColor={'#f7f4f0'}
              justifyContent='space-between'
              borderTopWidth={1}
            >
              <div className={styles.footer}>
                <div>total:</div>
                <div>{formatToCurency(total)}</div>
              </div>
              <Button colorScheme='whatsapp'>Buy now</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
};

export default Cart;
