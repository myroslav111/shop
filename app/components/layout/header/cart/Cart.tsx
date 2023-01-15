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

import { useTypedSelector } from '@/hooks/useTypedSelector';

// import { cart } from '@/components/data/cart.data';
import styles from './Cart.module.scss';
import CartItem from './cart-item/CartItem';

const Cart: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const cart = useTypedSelector(state => state.cart.items);

  return (
    <div className={styles['wrapper-cart']}>
      <button
        className={styles.heading}
        onClick={e => setIsOpen(!isOpen)}
        ref={btnRef}
      >
        <span className={styles.badge}>1</span>
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
                {cart.map(item => (
                  <CartItem item={item} key={item.id} />
                ))}
              </div>
            </DrawerBody>

            <DrawerFooter
              borderTopColor={'#f7f4f0'}
              justifyContent='space-between'
              borderTopWidth={1}
            >
              <div className={styles.footer}>
                <div>total:</div>
                <div>$100</div>
              </div>
              <Button colorScheme='green'>Checkout</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
};

export default Cart;
