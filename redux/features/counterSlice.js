import { createSlice } from '@reduxjs/toolkit';

// redux/features/counterSlice.js

const initialState = { value: 0 };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value += 1;
        },
        decrement(state) {
            state.value -= 1;
        },
        incrementByAmount(state, action) {
            const amount = Number(action.payload) || 0;
            state.value += amount;
        },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
export const selectCount = (state) => state.counter.value;