
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        setUser: (state, action) => {
            return { ...state, ...action.payload };

        },
        updateUser: (state, action) => {
            const updatedUser = action.payload;
            Object.keys(updatedUser).forEach(key => {
                state[key] = updatedUser[key]
            });
        },
    },
});

export const { setUser, updateUser } = userSlice.actions;

export default userSlice.reducer;


