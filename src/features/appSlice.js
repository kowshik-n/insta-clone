import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    login: 0,
    userData:{}
};

const appSlice = createSlice({
    name: 'instagram',
    initialState,
    reducers: {
        applogin: (state,{payload}) => {
            state.login = payload;
        }
    }
});

export const {applogin} = appSlice.actions;

export default appSlice.reducer;