import { configureStore } from "@reduxjs/toolkit";
import LoginReducers from './reducres/login'

const store = configureStore({
    reducer: {
        login: LoginReducers
    }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store