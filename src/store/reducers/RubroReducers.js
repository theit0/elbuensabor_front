import { createReducer } from "@reduxjs/toolkit"
import { get_rubros } from "../actions/RubroActions.js"

const estadoInicial = {
    rubros: []
}

const RubroReducers = createReducer(estadoInicial,
        (builder) => builder
                    .addCase(get_rubros.fulfilled, (state,action) => {
                        return {
                            ...state,
                            rubros: action.payload.rubros
                        }
                    })
)


export default RubroReducers;