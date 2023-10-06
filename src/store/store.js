import { configureStore } from "@reduxjs/toolkit";
import articuloReducers from '../store/reducers/ArticuloReducers'
import rubroReducers from '../store/reducers/RubroReducers'
export const store = configureStore({
    reducer: {
        articuloReducers,
        rubroReducers
    }
})