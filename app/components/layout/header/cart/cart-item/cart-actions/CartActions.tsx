import { AddIcon, MinusIcon, PlusSquareIcon } from '@chakra-ui/icons';
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react';
import { FC } from 'react';

import { useActions } from '@/hooks/useActions';

import { ICartItem } from '@/types/cart-item.interface';

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const { removeFromCart } = useActions();

  return (
    <div className='mt-3'>
      <HStack>
        <Button {...dec}>
          <MinusIcon fontSize={13} />
        </Button>
        <Input
          {...input}
          focusBorderColor='green.400'
          readOnly
          _hover={{ cursor: 'default' }}
        />
        <Button {...inc}>
          <AddIcon fontSize={13} />
        </Button>
      </HStack>

      <Button
        variant='unstyled'
        color='#f23c3d'
        marginTop={2}
        size='sm'
        opacity={0.8}
        onClick={() => removeFromCart({ id: item.id })}
      >
        Remove
      </Button>
    </div>
  );
};

export default CartActions;
