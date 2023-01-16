import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import '@/assets/styles/globals.scss';

import { persistor, store } from '@/store/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}
