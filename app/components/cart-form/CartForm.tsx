import { FC, useState } from 'react';
import Link from 'next/link';
import { Box, Input, VStack, Stack, Button, FormLabel, FormControl, Text, Heading, Image } from '@chakra-ui/react';
import { useCart } from '@/hooks/useCart';
import { COLORS } from '../../config/color.config';


const CartForm: FC = () => {
    const { cart, total } = useCart();
    const [name, setName] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [cvv, setCVV] = useState<string>('');
    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => setName(e.target.value);
    const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>): void => setNumber(e.target.value);
    const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>): void => setDate(e.target.value);
    const handleChangeCvv = (e: React.ChangeEvent<HTMLInputElement>): void => setCVV(e.target.value);

    const isButtonShown = name && number && date && cvv && total !== 0;

    // for example
    const discount: number = 5;
    const forPayment: number = total - total * discount / 100;

    let formData = {
        name,
        number,
        date,
        cvv,
        cart
    }

    const getFormData = () => { console.log(formData) }

    const resetFormInputs = (): void => {
        setName('');
        setNumber('');
        setDate('');
        setCVV('');
    }

    return (
        <Box shadow='md' borderWidth='1px' p={4} borderRadius='sm'>
            <Image
                objectFit='cover'
                maxW={{ base: '100%', md: "350px" }}
                src="https://napensii.ua/wp-content/uploads/kartochki-2.jpg"
                alt="Banks Cards"
            />
            <FormControl isRequired>
                <VStack spacing={3} >
                    <Heading>Card details</Heading>
                    <FormLabel htmlFor='name'>Name on card</FormLabel>
                    <Input id='name' name="name" value={name} onChange={handleChangeName} placeholder='Патрон Сапёрович' size='sm' />
                    <FormLabel htmlFor='number'>Card number</FormLabel>
                    <Input id='number' name="number" value={number} onChange={handleChangeNumber} placeholder='0000 1111 2222 3333' size='sm' />
                    <Stack>
                        <FormLabel htmlFor='date' textAlign="center">Expiration date</FormLabel>
                        <Input id='date' name="date" value={date} onChange={handleChangeDate} placeholder='mm/yy' size='sm' />
                        <FormLabel htmlFor='cvv' textAlign="center">CVV</FormLabel>
                        <Input id='cvv' name="cvv" value={cvv} onChange={handleChangeCvv} placeholder='123' size='sm' />
                    </Stack>
                    <Text>Total: {total}</Text>
                    <Text>Discount: {discount}%</Text>
                    <Text>For payment: {forPayment}$</Text>
                    {isButtonShown ? <Button type='submit' backgroundColor={COLORS['dark-green']} color={COLORS.white} size='sm' onClick={() => { getFormData(); resetFormInputs() }}>
                        <Link href="/payment/PaymentStatus">Lets Pay It</Link>
                    </Button> : <Button backgroundColor={COLORS['dark-green']} color={COLORS.white} size='sm' disabled>Lets Pay It</Button>}
                </VStack>
            </FormControl>
        </Box >
    )
};


export default CartForm;