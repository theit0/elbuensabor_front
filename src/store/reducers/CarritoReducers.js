import { createReducer } from "@reduxjs/toolkit"
import { eliminar_articulo_carrito, eliminar_articulo_unidad_carrito, get_articulo_carrito, set_articulo_carrito } from "../actions/CarritoActions.js"

const estadoInicial = {
    carrito: []
}

const CarritoReducers = createReducer(estadoInicial,
        (builder) => builder
                    .addCase(get_articulo_carrito, (state,action) => {
                        return {
                            ...state,
                            carrito: action.payload.carrito,
                        };
                    })
                    .addCase(set_articulo_carrito, (state,action) => {
                        const nuevoArticulo = action.payload.articulo;
                        return {
                            ...state,
                            carrito: [...state.carrito, nuevoArticulo]
                        }
                    })
                    .addCase(eliminar_articulo_carrito, (state, action) => {
                        const articuloId = action.payload.articuloId;
                        // Lógica para eliminar el artículo del carrito
                        return {
                          ...state,
                          carrito: state.carrito.filter((articulo) => articulo.id !== articuloId),
                        };
                    })
                    .addCase(eliminar_articulo_unidad_carrito, (state, action) => {
                        return {
                          ...state,
                          carrito: action.payload.carrito,
                        };
                    })
)


export default CarritoReducers;