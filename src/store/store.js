import { configureStore } from "@reduxjs/toolkit";
import articuloReducers from '../store/reducers/ArticuloReducers'
import rubroReducers from '../store/reducers/RubroReducers'
import clienteReducers from '../store/reducers/ClienteReducers'
import carritoReducers from '../store/reducers/CarritoReducers'

export const store = configureStore({
    reducer: {
        articuloReducers,
        rubroReducers,
        clienteReducers,
        carritoReducers
    }
})