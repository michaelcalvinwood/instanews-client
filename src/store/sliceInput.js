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
        removeUrl: (state, action) => {
            state.urls = state.urls.filter(url => url.id !== action.payload.id);
            return state;
        },
        approveQuery: (state, action) => {
            state.queryApproved = true;
            return state;
        }
    }
});

export const { setTopic, setQuery, setUrls, approveQuery, removeUrl } = sliceInput.actions;

export default sliceInput.reducer;