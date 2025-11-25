import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    loading: false,
    error: null,
};

const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            }   )
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export { fetchUsers };
export default usersSlice.reducer;