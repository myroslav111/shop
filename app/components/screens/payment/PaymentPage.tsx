import { FC } from 'react';
import { Flex, Spacer, Box, Text } from '@chakra-ui/react';

import CartCard from '@/components/cart-card/CartCard';
import CartForm from '../../cart-form/CartForm';
import { useCart } from '@/hooks/useCart';


const PaymentPage: FC = () => {
    const { cart } = useCart();


    return (
        <Flex p={3}>
            <Box>
                {cart.length ? cart.map(item => <CartCard item={item} key={item.id} />) : <Text>Basket is empty</Text>}
            </Box>
            <Spacer p={2} />
            <Box>
                <CartForm />
            </Box>
        </Flex>
    );
};


export default PaymentPage;