import { createReducer } from "@reduxjs/toolkit"
import { get_cliente } from "../actions/ClienteActions.js"

const estadoInicial = {
    cliente: ''
}

const ClientesReducers = createReducer(estadoInicial,
        (builder) => builder
                    .addCase(get_cliente.fulfilled, (state,action) => {
                        return {
                            ...state,
                            cliente: action.payload.cliente
                        }
                    })
)


export default ClientesReducers;