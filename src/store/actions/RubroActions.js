import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export const get_rubros = createAsyncThunk('get_rubros',async ()=>{
    
    try {
        const response = await axios.get('http://localhost:8080/api/v1/rubros')
        return {
            rubros: response.data
        }
    } catch (error) {
        console.log(error)
    } 
    
})





