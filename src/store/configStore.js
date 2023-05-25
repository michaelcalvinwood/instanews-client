import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './sliceInput';
import setAlertReducer from './sliceAlert';
import spinnerReducer from './sliceSpinner';
import loginReducer from './sliceLogin';

const store = configureStore({ 
    reducer: {
       login: loginReducer,
       input: inputReducer,
       setAlert: setAlertReducer,
       spinner: spinnerReducer
    }
});

export default store;