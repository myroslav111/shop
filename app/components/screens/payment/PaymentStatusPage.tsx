import { FC } from 'react';
import Link from 'next/link';
import { Box, Button, Text } from '@chakra-ui/react';
import { COLORS } from '../../../config/color.config';


const PaymentStatusPage: FC = () => {

    return (
        <Box p={5}>
            <Button backgroundColor={COLORS['dark-green']} color={COLORS.white}>
                <Link href="/">Back to home</Link>
            </Button>
            <Text>Congratulations!!! You bought all, that you wanted.</Text>
        </Box>
    );
};


export default PaymentStatusPage;