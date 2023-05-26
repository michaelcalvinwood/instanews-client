import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const sliceInput = createSlice({
    name: 'input',
    initialState: {topic: '', query: '', queryApproved: false, urls: [], seed: ''},
    reducers: {
        setTopic: (state, action) => {
            state.topic = action.payload.topic;
            return state;
        },
        setQuery: (state, action) => {
            state.query = action.payload.query;
            return state;
        },
        setSeed: (state, action) => {
            state.seed = action.payload.seed;
            return state;
        },
        setUrls: (state, action) => {
            state.urls = action.payload.urls;
            try {
                if (state.seed) {
                    const url = new URL(state.seed);
                    state.urls.unshift({title: 'Seed', domain:url.hostname, link: state.seed, snippet: '', date: 'now', id: uuidv4()})
                }
            } catch (err) {

            }
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

export const { setTopic, setQuery, setUrls, approveQuery, removeUrl, setSeed } = sliceInput.actions;

export default sliceInput.reducer;