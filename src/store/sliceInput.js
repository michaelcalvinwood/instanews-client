import { createSlice } from '@reduxjs/toolkit';

const sliceInput = createSlice({
    name: 'input',
    initialState: {topic: '', query: '', queryApproved: false, urls: []},
    reducers: {
        setTopic: (state, action) => {
            state.topic = action.payload.topic;
            return state;
        },
        setQuery: (state, action) => {
            state.query = action.payload.query;
            return state;
        },
        setUrls: (state, action) => {
            state.urls = action.payload.urls;
            return state;
        },
        approveQuery: (state, action) => {
            state.queryApproved = true;
            return state;
        }
    }
});

export const { setTopic, setQuery, setUrls, approveQuery } = sliceInput.actions;

export default sliceInput.reducer;