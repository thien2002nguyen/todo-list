import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
    name: 'books',
    initialState: { listBook: [], listAllBook: [] },
    reducers: {
        setListBook: (state, action) => {
            state.listBook = action.payload;
        },
        setListAllBook: (state, action) => {
            state.listAllBook = action.payload;
        },
    },
});

export const { setListBook, setListAllBook } = bookSlice.actions;
export default bookSlice.reducer;