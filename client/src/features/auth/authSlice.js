import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auths',
    initialState: { isCheckedLogin: false },
    reducers: {
        setIsCheckedLogin: (state, action) => {
            state.isCheckedLogin = action.payload;
        },
    },
});

export const { setIsCheckedLogin } = authSlice.actions;
export default authSlice.reducer;