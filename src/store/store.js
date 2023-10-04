import { configureStore } from "@reduxjs/toolkit";
import articuloReducers from '../store/reducers/ArticuloReducers'
export const store = configureStore({
    reducer: {
        articuloReducers
    }
})