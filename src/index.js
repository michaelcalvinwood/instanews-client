import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/*
 * Redux Provider
 */
import { Provider } from 'react-redux';
import store from './store/configStore';

/*
 * Chakra Provider Setup: https://pro.chakra-ui.com/guides/get-started
 */

import { ChakraProvider } from '@chakra-ui/react';
import { theme as proTheme } from '@chakra-ui/pro-theme'
import { extendTheme, theme as baseTheme, ColorModeScript } from '@chakra-ui/react'

/*
 * For incredible array of font choices see: https://www.npmjs.com/search?perPage=20&page=0&q=%40fontsource&ranking=popularity
 */

import '@fontsource/roboto/'

/*
 * socket io
 */
import { io } from 'socket.io-client';
import * as socket from './utils/socket';

export const theme = extendTheme(
  {
    colors: { ...baseTheme.colors, brand: baseTheme.colors.messenger },
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  proTheme
)

console.log('store', store);
socket.setupTheSocket(io, `https://node.pymnts.com:6405`, store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Provider>

);


