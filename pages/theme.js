import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: '#1a202c',
                color: 'white',
            },
        },
    },
});

export default theme;
