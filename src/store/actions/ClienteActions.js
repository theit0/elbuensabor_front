import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


export const get_cliente = createAsyncThunk('get_cliente',async ()=>{
    const response = await axios.get('http://localhost:8080/api/v1/clientes')
    console.log(response.data[0])
    localStorage.setItem('cliente',JSON.stringify(response.data[0]))
    return {
        cliente: data.response.cliente
    } 
})