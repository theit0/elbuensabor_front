import { Link } from 'react-router-dom'
import ArticuloCarrito from '../components/ArticuloCarrito'
import '../styles/Carrito.css'
import { useSelector } from 'react-redux'

const Carrito = () => {

    const articulosAgregados = useSelector(store => store.carritoReducers.carrito)

    const contarVecesAgregado = (arreglo, value) => {
        return arreglo.reduce((contador, articulo) => contador + (articulo.id === value ? 1 : 0), 0);
    };

    let subtotal = 0;

    articulosAgregados.forEach((articulo)=>{
        subtotal = subtotal+ articulo.precioVenta;
    })

    const envio = 500;


    return (
        <div className='carrito-container'>
            
            
            <div className='container-principal-carrito'>
                {
                    <div className='articulos-carrito'>
                        <Link className='seguir-viendo-boton' to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M5 12l14 0"></path>
                                <path d="M5 12l4 4"></path>
                                <path d="M5 12l4 -4"></path>
                            </svg>
                            Seguir viendo productos
                        </Link>
                        <article className='carrito-titulo-container'>
                            <div className='titulo-carrito'>
                                <h1>Tu carrito</h1>
                                <span>{articulosAgregados.length} productos en el carrito</span>
                            </div>
                        </article>

                        {   
                            [...new Set(articulosAgregados.map(articulo => articulo.id))].map(articuloID => {
                                const article = articulosAgregados.find(a => a.id === articuloID);
                                const cntAgr = contarVecesAgregado(articulosAgregados, articuloID);
                                return <ArticuloCarrito key={articuloID} articulo={article} cntAgr={cntAgr} />;
                            })
                        }
                        
                        {
                            articulosAgregados.length===0 &&
                            <p className='mensaje-vacio'>
                                Actualmente, tu carrito de compras está vacío. Vuelve al inicio para agregar productos. Si necesitas asistencia, estamos aquí para ayudarte en todo momento.
                            </p>
                        }
                    </div>
                }

                {
                    articulosAgregados.length>0 &&

                    <div className='resumen-carrito'>
                        <div className='resumen-info'>
                            <span>Subtotal</span>
                            <span>${subtotal}</span>
                        </div>
                        <div className='resumen-info'>
                            <span>Impuestos</span>
                            <span>$0</span>
                        </div>
                        <div className='resumen-info'>
                            <span>Envío</span>
                            <span>${envio}</span>
                        </div>
                        <div className='resumen-info'>
                            <span>Total</span>
                            <span>${subtotal+envio}</span>
                        </div>
                        <article>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M5 12l5 5l10 -10"></path>
                                </svg>
                                Confirmar pedido
                            </button>
                        </article>
                    </div>
                }
                

            </div>
        </div>
    )
}

export default Carrito
