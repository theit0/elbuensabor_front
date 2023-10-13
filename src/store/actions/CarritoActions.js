import { createAction } from "@reduxjs/toolkit";

export const get_articulo_carrito = createAction('get_articulo_carrito',()=>{
    const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
    return {
        payload: {
            carrito: carritoActual,
        },
    };
})


export const set_articulo_carrito = createAction('set_articulo_carrito', (articulo)=>{
    const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
    const nuevoCarrito = [...carritoActual, articulo];
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    return {
        payload:{
            articulo
        }
    } 
})




export const eliminar_articulo_carrito = createAction('eliminar_articulo_carrito', (articuloId) => {
    // Actualizar el localStorage eliminando el artículo
    const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
    const nuevoCarrito = carritoActual.filter((articulo) => articulo.id !== articuloId);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
  
    // Retorna la acción con el id del artículo a eliminar
    return {
      payload: {
        articuloId,
      },
    };
  });


  