import { FC } from 'react';
import { Heading, Text, Card, CardBody, Image, Stack, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Button } from '@chakra-ui/react';
import { ICartItem } from '@/types/cart-item.interface';
import { formatToCurency } from '@/utils/format-to-currency';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useActions } from '@/hooks/useActions';
import { COLORS } from '../../config/color.config';


const CartCard: FC<{ item: ICartItem }> = ({ item }) => {

    const { removeFromCart, changeQuantity } = useActions();

    return (
        <Card
            direction="row"
            justify="space-between"
            alignItems='center'
            backgroundColor='#D0DCD1'
            shadow='md'
            overflow='hidden'
            variant='outline'
            p={2}
            _notLast={{
                mb: "2",
            }}
        >
            <Image
                objectFit='cover'
                maxW={{ base: '50px' }}
                src={item.product.images[0]}
                alt={item.product.name}
            />

            <Stack flexGrow={100}>
                <CardBody>
                    <Heading textAlign={{ base: 'center', md: 'left' }} p={0} fontSize={{ base: 'sm', md: 'md' }}>{item.product.name}</Heading>
                    {/* <Text display={{ base: "none", md: "block" }} py='2'>{item.product.description}</Text> */}
                </CardBody>
            </Stack>
            <Stack p={2} flexGrow={1} display={{ base: 'none', md: 'block' }}>
                <NumberInput w={70} step={1} min={0} defaultValue={item.quantity} >
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
            <Text p={2} flexGrow={1}>{formatToCurency(item.quantity * item.product.price)}</Text>
            <Button p={{ base: '0', md: '2' }} backgroundColor={COLORS['dark-green']} color={COLORS.white} size={{ base: 'sm', md: 'md' }} flexGrow={1} onClick={() => removeFromCart({ id: item.id })}><RiDeleteBin6Line /></Button>
        </Card >

    );
};


export default CartCard;