import { Link, useParams } from 'react-router-dom'
import '../styles/ArticuloManufacturadoDetalle.css'
import { useDispatch, useSelector } from 'react-redux';
import { get_articulo } from '../store/actions/ArticuloActions';
import { useEffect, useState } from 'react';


const ArticuloManufacturadoDetalle = () => {
  const { id } = useParams();
  const articulo = useSelector(store => store.articuloReducers.articulo);
  const dispatch = useDispatch();

  useEffect(() => {
      window.scrollTo(130, 130);
      dispatch(get_articulo(id));
  }, []);

  const [unidades,setUnidades] = useState(0)
  
  if(unidades<0) {
    setUnidades(0);
  }


 

  return (
      <section className='art-manuf-detalle-section'>
          {
            articulo ?
            <div className='art-manuf-detalle-container'> 
                <Link to='/' className='ir-atras'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left" width="15" height="15" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l14 0"></path>
                    <path d="M5 12l4 4"></path>
                    <path d="M5 12l4 -4"></path>
                  </svg>
                    Ir atrás
                </Link>
                <div>
                    <span className='path'>{`Inicio / ${articulo.rubroArticulo ? articulo.rubroArticulo.denominacion : 'Rubro Desconocido'} / `}</span>
                    <span><b>{`${articulo.denominacion}`}</b></span>
                </div>

                <div className='articulo-detalle-container'>
                    <div className='detalle-articulo-imagen-container'>
                        <img src={articulo.urlImagen} alt={articulo.denominacion} />
                    </div>
                    <div className='detalle-articulo-info'>
                        <div className='articulo-info-subdiv'>
                          <h1>{articulo.denominacion}</h1>
                          <p>{articulo.descripcion}</p>
                        </div>
                        <div className='articulo-info-subdiv'>
                          <h3>${articulo.precioVenta} por unidad</h3>
                          <p>10% OFF con retiro en el local</p>
                        </div>
                        <div className='cantidad-unidades-container'>
                          <div className='cantidad-unidades'>
                            <button onClick={()=>setUnidades(unidades-1)}>
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-minus" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M5 12l14 0"></path>
                              </svg>
                            </button>
                            <span>
                                {unidades}
                            </span>
                            <button onClick={()=>setUnidades(unidades+1)}>
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M12 5l0 14"></path>
                                <path d="M5 12l14 0"></path>
                              </svg>
                            </button>
                          </div>
                          <p>¡Quedan <b className='unidades'>10 unidades</b> disponibles!</p>
                        </div>
                        <button className='añadir-carrito-boton'>
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                              <path d="M12.5 17h-6.5v-14h-2"></path>
                              <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5"></path>
                              <path d="M16 19h6"></path>
                              <path d="M19 16v6"></path>
                          </svg>
                          Añadir al carrito
                        </button>
                    </div>
                </div>
            </div>
            :
            <div className="loading-spinner">
              <div className="spinner"></div>
            </div>
          }
          
      </section>
  );
};

export default ArticuloManufacturadoDetalle;
