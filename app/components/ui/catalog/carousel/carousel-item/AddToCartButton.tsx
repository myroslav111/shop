import { Button } from '@chakra-ui/react';
import { FC } from 'react';

import { COLORS } from '@/config/color.config';

import { TypeSize } from '@/store/cart/cart.types';

import { useActions } from '@/hooks/useActions';
import { useCart } from '@/hooks/useCart';

import { IProduct } from '@/types/product.intarface';

interface IAddToCartlButton {
  product: IProduct;
  selectedSize: TypeSize;
}

const AddToCartlButton: FC<IAddToCartlButton> = ({ product, selectedSize }) => {
  const { addToCart, removeFromCart } = useActions();
  const { cart } = useCart();
  const currentElement = cart.find(
    cartItem =>
      cartItem.product.id === product.id && cartItem.size === selectedSize
  );
  return (
    <div className='text-center'>
      <Button
        onClick={() =>
          currentElement
            ? removeFromCart({ id: currentElement.id })
            : addToCart({
                product,
                quantity: 1,
                size: selectedSize
              })
        }
        color={COLORS.green}
        className='tracking-widest'
        marginTop={8}
        borderRadius={20}
        fontWeight={500}
        textTransform='uppercase'
        fontSize={12}
      >
        {currentElement ? 'Remove from basket' : 'Add to basket'}
      </Button>
    </div>
  );
};

export default AddToCartlButton;
