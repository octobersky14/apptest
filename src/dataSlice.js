import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    //all consts go here, set to initial state
    data: [],
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        //functions to change state
        addData: (state, action) => {
            state.data = action.payload;
        },
    },
});

//export all reducers
export const { addData } = dataSlice.actions;

export default dataSlice.reducer;