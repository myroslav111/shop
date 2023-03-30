import { FC } from 'react';
import Link from 'next/link';
import { Button, Flex, Box, Text } from '@chakra-ui/react';
import CartCard from '@/components/cart-card/CartCard';
import CartForm from '../../cart-form/CartForm';
import { useCart } from '@/hooks/useCart';
import { COLORS } from '../../../config/color.config';


const PaymentPage: FC = () => {
    const { cart } = useCart();


    return (
        <Box p={5}>
            <Button mb={2} backgroundColor={COLORS['dark-green']} color={COLORS.white}>
                <Link href="/">Back to home</Link>
            </Button>
            <Flex flexDirection={{ base: "column", md: "row" }}>
                <Box flexGrow={{ md: '2' }} mr={{ md: '2' }}>
                    {cart.length ? cart.map(item => <CartCard item={item} key={item.id} />) : <Text>Basket is empty</Text>}
                </Box>
                <Box mt={{ base: '2', md: '0' }}>
                    <CartForm />
                </Box>
            </Flex>
        </Box>
    );
};


export default PaymentPage;