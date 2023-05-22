import { configureStore } from '@reduxjs/toolkit';
import sourceUrlReducer from './sliceSourceUrl';
import setAlertReducer from './sliceAlert';

const store = configureStore({ 
    reducer: {
       sourceUrl: sourceUrlReducer,
       setAlert: setAlertReducer
    }
});

export default store;