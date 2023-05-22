import { createSlice } from '@reduxjs/toolkit';

const sliceSourceUrl = createSlice({
    name: 'sourceUrl',
    initialState: '',
    reducers: {
        setSourceUrl: (state, action) => {
            console.log(action);
            const { url } = action.payload;
            return url;
        }
    }
});

export const { changeCounterValue } = sliceSourceUrl.actions;

export default sliceSourceUrl.reducer;