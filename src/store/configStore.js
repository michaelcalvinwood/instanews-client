import { configureStore } from '@reduxjs/toolkit';
import sourceUrlReducer from './sliceSourceUrl';
import setAlertReducer from './sliceAlert';
import spinnerReducer from './sliceSpinner';

const store = configureStore({ 
    reducer: {
       sourceUrl: sourceUrlReducer,
       setAlert: setAlertReducer,
       spinner: spinnerReducer
    }
});

export default store;