import { FC } from 'react';
import { Heading, Text, Card, CardBody, Image, Stack, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Button } from '@chakra-ui/react';
import { ICartItem } from '@/types/cart-item.interface';
import { formatToCurency } from '@/utils/format-to-currency';

import { RiDeleteBin6Line } from 'react-icons/ri';
import { useActions } from '@/hooks/useActions';




const CartCard: FC<{ item: ICartItem }> = ({ item }) => {

    const { removeFromCart, changeQuantity } = useActions();

    return (
        <Card
            direction='row'
            justify="space-between"
            alignItems='center'
            overflow='hidden'
            variant='outline'
            p={2}
            _notLast={{
                mb: "2",
            }}
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '70px' }}
                src={item.product.images[0]}
                alt={item.product.name} />

            <Stack>
                <CardBody>
                    <Heading size='md'>{item.product.name}</Heading>
                    <Text py='2'>{item.product.description}</Text>
                </CardBody>
            </Stack>
            <Stack p={2} >
                <NumberInput step={1} min={0} defaultValue={item.quantity} >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper onClick={() => changeQuantity({ id: item.id, type: 'plus' })} />
                        <NumberDecrementStepper onClick={() => {
                            if (item.quantity > 0) {
                                changeQuantity({ id: item.id, type: 'minus' })
                            }
                        }} />
                    </NumberInputStepper>
                </NumberInput>
            </Stack>
            <Text>{formatToCurency(item.quantity * item.product.price)}</Text>
            <Button colorScheme='red' size='sm' onClick={() => removeFromCart({ id: item.id })}><RiDeleteBin6Line /></Button>
        </Card >

    );
};

export default CartCard;