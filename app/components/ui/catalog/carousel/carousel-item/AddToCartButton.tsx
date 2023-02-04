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
  variant?: 'small' | 'medium';
}

const AddToCartlButton: FC<IAddToCartlButton> = ({
  product,
  selectedSize,
  variant = 'small'
}) => {
  const { addToCart, removeFromCart } = useActions();
  const { cart } = useCart();
  const currentElement = cart.find(
    cartItem =>
      cartItem.product._id === product._id && cartItem.size === selectedSize
  );

  const isSmall = variant === 'small';
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
        color={isSmall ? COLORS.green : COLORS.white}
        backgroundColor={isSmall ? undefined : COLORS.green}
        className='tracking-widest'
        _hover={{
          backgroundColor: isSmall ? undefined : COLORS['dark-green']
        }}
        marginTop={8}
        borderRadius={20}
        fontWeight={500}
        textTransform='uppercase'
        fontSize={isSmall ? 12 : 16}
      >
        {currentElement ? 'Remove from basket' : 'Add to basket'}
      </Button>
    </div>
  );
};

export default AddToCartlButton;
