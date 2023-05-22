import { configureStore } from '@reduxjs/toolkit';
import sourceUrlReducer from './sliceSourceUrl';

const store = configureStore({ 
    reducer: {
       sourceUrl: sourceUrlReducer
    }
});

export default store;