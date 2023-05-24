import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './sliceInput';
import setAlertReducer from './sliceAlert';
import spinnerReducer from './sliceSpinner';

const store = configureStore({ 
    reducer: {
       input: inputReducer,
       setAlert: setAlertReducer,
       spinner: spinnerReducer
    }
});

export default store;