import { FC, useState } from 'react';
import { Box, Input, VStack, HStack, Button, FormLabel, FormControl, Text, Heading } from '@chakra-ui/react';
import { useCart } from '@/hooks/useCart';



const CartForm: FC = () => {
    const { cart, total } = useCart();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [date, setDate] = useState('');
    const [cvv, setCVV] = useState('');
    const handleChangeName = (event: any) => setName(event.target.value);
    const handleChangeNumber = (event: any) => setNumber(event.target.value);
    const handleChangeDate = (event: any) => setDate(event.target.value);
    const handleChangeCvv = (event: any) => setCVV(event.target.value);

    const isButtonShown = name && number && date && cvv && total !== 0;

    // for example
    const discount = 5;
    const forPayment = total - total * discount / 100;


    return (
        <Box shadow='md' borderWidth='1px' p={4} borderRadius='sm' >
            <FormControl>
                <VStack spacing={3} >
                    <Heading>Card details</Heading>
                    <FormLabel>Name on card</FormLabel>
                    <Input value={name} onChange={handleChangeName} placeholder='Патрон Сапёрович' size='sm' />
                    <FormLabel>Card number</FormLabel>
                    <Input value={number} onChange={handleChangeNumber} placeholder='0000 1111 2222 3333' size='sm' />
                    <HStack>
                        <FormLabel>Expiration date</FormLabel>
                        <Input value={date} onChange={handleChangeDate} placeholder='mm/yy' size='sm' />
                        <FormLabel>CVV</FormLabel>
                        <Input value={cvv} onChange={handleChangeCvv} placeholder='123' size='sm' />
                    </HStack>
                    <Text>Total: {total}</Text>
                    <Text>Discount: {discount}%</Text>
                    <Text>For payment: {forPayment}$</Text>
                    {isButtonShown ? <Button colorScheme='green' size='sm'><a href="/payment/PaymentOk">Lets Pay It</a></Button> : <Button colorScheme='green' size='sm' disabled>Lets Pay It</Button>}
                </VStack>
            </FormControl>
        </Box>


    )
};

export default CartForm;




// <div className={styles.wrapper}>CartPayForm
        //     <p>Card type
        //         {/* <input type="radio" name="card-type">
        //             <img />
        //         </input>
        //         <input type="radio" name="card-type">
        //             <img />
        //         </input>
        //         <input type="radio" name="card-type">
        //             <img />
        //         </input> */}
        //     </p>
        //     <label>Name on card
        //         <input>
        //         </input>
        //     </label>
        //     <label>Card number
        //         <input type="number" required>
        //         </input>
        //     </label>
        //     <label>Expiration date
        //         <input>
        //         </input>
        //     </label>
        //     <label>CVV
        //         <input type="number" required>
        //         </input>
        //     </label>
        //     <button type='submit'>Checkout</button>
        // </div>