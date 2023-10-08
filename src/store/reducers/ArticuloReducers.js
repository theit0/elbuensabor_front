import { createReducer } from "@reduxjs/toolkit"
import {get_articulo, get_articulos, get_articulos_denominacion, get_articulos_precio_asc, get_articulos_precio_desc, get_articulos_rubro} from '../actions/ArticuloActions.js'

const estadoInicial = {
    articulos: [],
    articulo: {}
}

const ArticuloReducers = createReducer(estadoInicial,
        (builder) => builder
                    .addCase(get_articulos.fulfilled, (state,action) => {
                        return {
                            ...state,
                            articulos: action.payload.articulos
                        }
                    })
                    .addCase(get_articulo.fulfilled, (state,action) => {
                        return {
                            ...state,
                            articulo: action.payload.articulo
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
                    .addCase(get_articulos_precio_desc.fulfilled, (state,action) => {
                        return {
                            ...state,
                            articulos: action.payload.articulos
                        }
                    })
                    .addCase(get_articulos_precio_asc.fulfilled, (state,action) => {
                        return {
                            ...state,
                            articulos: action.payload.articulos
                        }
                    })
)


export default ArticuloReducers;