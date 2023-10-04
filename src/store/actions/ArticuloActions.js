import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export const get_articulos = createAsyncThunk('get_articulos',async ()=>{
    
    try {
        const response = await axios.get('https://elbuensaborservice.onrender.com/api/v1/ArticuloManufacturado')
        console.log(response.data)
        return {
            articulos: response.data
        }
    } catch (error) {
        console.log(error)
    } 
    
})

