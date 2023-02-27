import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import '@/assets/styles/globals.scss';

import { persistor, store } from '@/store/store';

// Create a client
const queryClient = new QueryClient();

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: ''
      }
    })
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ChakraProvider theme={theme}>
            <NextNProgress color='#006044' />
            <Component {...pageProps} />
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}
