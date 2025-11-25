import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import usersReducer from "./features/users/usersSlice";


const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer,
    },
});

export default store;