import { createReducer } from "@reduxjs/toolkit"
import {get_articulos, get_articulos_denominacion, get_articulos_rubro} from '../actions/ArticuloActions.js'

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
                    .addCase(get_articulos_denominacion.fulfilled, (state,action) => {
                        return {
                            ...state,
                            articulos: action.payload.articulos
                        }
                    })
                    .addCase(get_articulos_rubro.fulfilled, (state,action) => {
                        return {
                            ...state,
                            articulos: action.payload.articulos
                        }
                    })
)


export default ArticuloReducers;