import { createSlice } from '@reduxjs/toolkit';

const sliceAlert = createSlice({
    name: 'alert',
    initialState: {status: 'error', msg: ''},
    reducers: {
        setAlert: (state, action) => {
            console.log(action);
            const { status, msg } = action.payload;
            return {status, msg}
        }
    }
});

export const { setAlert } = sliceAlert.actions;

export default sliceAlert.reducer;