import { createSlice } from '@reduxjs/toolkit';

const sliceSpinner = createSlice({
    name: 'spinner',
    initialState: false,
    reducers: {
        turnOnSpinner: (state, action) => true,
        turnOffSpinner: (state, action) => false
    }
});

export const { turnOffSpinner, turnOnSpinner } = sliceSpinner.actions;

export default sliceSpinner.reducer;