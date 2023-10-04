import { createReducer } from "@reduxjs/toolkit"
import {get_articulos} from '../actions/ArticuloActions.js'

const estadoInicial = {
    articulos: []
}

const ArticuloReducers = createReducer(estadoInicial,
        (builder) => builder
                    .addCase(get_articulos.fulfilled, (state,action) => {
                        return {
                            ...state,
                            articulos: action.payload.articulos
                        }
                    })
)


export default ArticuloReducers;