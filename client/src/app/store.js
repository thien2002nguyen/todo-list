import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../features/books/bookSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
    reducer: {
        books: bookReducer,
        auths: authReducer
    },
})