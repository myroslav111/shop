import { Button } from '@chakra-ui/react';
import { FC } from 'react';

import { COLORS } from '@/config/color.config';

import { TypeSize } from '@/store/types';

import { useActions } from '@/hooks/useActions';

import { IProduct } from '@/types/product.intarface';

interface ICarouselButton {
  product: IProduct;
  selectedSize: TypeSize;
}

const CarouselButton: FC<ICarouselButton> = ({ product, selectedSize }) => {
  const { addToCart } = useActions();
  return (
    <div className='text-center'>
      <Button
        onClick={() =>
          addToCart({
            product,
            quantity: 1,
            size: selectedSize
          })
        }
        color={COLORS.green}
        className='tracking-widest'
        marginTop={10}
        borderRadius={20}
        fontWeight={500}
        textTransform='uppercase'
        fontSize={12}
      >
        Add to basket
      </Button>
    </div>
  );
};

export default CarouselButton;
