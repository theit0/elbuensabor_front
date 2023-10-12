import { eliminar_articulo_carrito } from '../store/actions/CarritoActions'
import '../styles/Carrito.css'

import { useDispatch, useSelector } from 'react-redux'

const Carrito = () => {

    const articulosAgregados = useSelector(store=>store.carritoReducers.carrito)

    console.log(articulosAgregados)

    const dispatch = useDispatch()


    const eliminarDelCarrito = (id) => {
      dispatch(eliminar_articulo_carrito(id))
    }

    return (
      <div className='carrito-container'>
        {
          articulosAgregados.map(articulo=> {
            return <div>
                      <h3>{articulo.denominacion}</h3>
                      <p>{articulo.descripcion}</p>
                      <span>{articulo.precioVenta}</span>
                      <button onClick={()=>eliminarDelCarrito(articulo.id)}>Eliminar</button>
                  </div>
          })    
        }
          
      </div>
    )
}

export default Carrito