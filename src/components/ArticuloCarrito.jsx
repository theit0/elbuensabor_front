import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { eliminar_articulo_carrito } from '../store/actions/CarritoActions';

const ArticuloCarrito = ({ articulo,cntAgr }) => {
    console.log(cntAgr)

    const dispatch = useDispatch()

    const eliminarDelCarrito = (id) => {
      dispatch(eliminar_articulo_carrito(id))
    }

    return (
        <div>
            <h3>{articulo.denominacion}</h3>
            <p>{articulo.descripcion}</p>
            <span>{articulo.precioVenta}</span>
            <button onClick={()=>eliminarDelCarrito(articulo.id)}>Eliminar</button>
            <button>-</button>
            <span>{cntAgr}</span>
            <button>+</button>
        </div>
    );
};

export default ArticuloCarrito;
