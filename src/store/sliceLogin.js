import { createSlice } from '@reduxjs/toolkit';

const sliceLogin = createSlice({
    name: 'login',
    initialState: {username: '', password: ''},
    reducers: {
        setUsername: (state, action) => {
            console.log(action);
            state.username = action.payload.username;
            return state;
        },
        setPassword: (state, action) => {
            console.log(action);
            state.password = action.payload.password;
            return state;
        },
    }
});

export const { setPassword, setUsername } = sliceLogin.actions;

export default sliceLogin.reducer;