import ArticuloCarrito from '../components/ArticuloCarrito'
import '../styles/Carrito.css'

import { useSelector } from 'react-redux'

const Carrito = () => {

    const articulosAgregados = useSelector(store => store.carritoReducers.carrito)

    console.log([new Set(articulosAgregados.map(article => article.id))])


    const contarVecesAgregado = (arreglo, value) => {
        return arreglo.reduce((contador, articulo) => contador + (articulo.id === value ? 1 : 0), 0);
    };

    return (
        <div className='carrito-container'>
            {
                [...new Set(articulosAgregados.map(articulo => articulo.id))].map(articuloID => {
                    const article = articulosAgregados.find(a => a.id === articuloID);
                    const cntAgr = contarVecesAgregado(articulosAgregados, articuloID);
                    return <ArticuloCarrito key={articuloID} articulo={article} cntAgr={cntAgr} />;
                })
            }
        </div>
    )
}

export default Carrito
