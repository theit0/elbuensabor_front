import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export const get_articulos = createAsyncThunk('get_articulos',async ()=>{
    
    try {
        const response = await axios.get('http://localhost:8080/api/v1/articulosManufacturados')
        return {
            articulos: response.data
        }
    } catch (error) {
        console.log(error)
    } 
    
})

export const get_articulo = createAsyncThunk('get_articulo',async (id)=>{
    
    try {
        const response = await axios.get(`http://localhost:8080/api/v1/articulosManufacturados/${id}`)
        console.log(response.data)
        return {
            articulo: response.data
        }
    } catch (error) {
        console.log(error)
    } 
    
})


export const get_articulos_denominacion = createAsyncThunk('get_articulos_denominacion',async (obj)=>{
    try {
        const response = await axios.get(`http://localhost:8080/api/v1/articulosManufacturados/buscarArticuloManufacturadoPorDenominacion?denominacion=${obj.denominacion}`)
        
        return {
            articulos: response.data
        }
    } catch (error) {
        console.log(error)
    }
})

export const get_articulos_rubro = createAsyncThunk('get_articulos_rubro',async (denominacionRubro)=>{
    try {
        const response = await axios.get(`http://localhost:8080/api/v1/articulosManufacturados/filtroPorRubro?denominacionRubro=${denominacionRubro}`)
        console.log(response)
        return {
            articulos: response.data
        }
    } catch (error) {
        console.log(error)
    }
})


export const get_articulos_precio_desc = createAsyncThunk('get_articulos_precio_desc',async ()=>{
    try {
        const response = await axios.get(`http://localhost:8080/api/v1/articulosManufacturados/filtradoPorPrecioDesc`)
        console.log(response)
        return {
            articulos: response.data
        }
    } catch (error) {
        console.log(error)
    }
})

export const get_articulos_precio_asc = createAsyncThunk('get_articulos_precio_asc',async ()=>{
    try {
        const response = await axios.get(`http://localhost:8080/api/v1/articulosManufacturados/filtradoPorPrecioAsc`)
        console.log(response)
        return {
            articulos: response.data
        }
    } catch (error) {
        console.log(error)
    }
})




