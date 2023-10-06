import { useSelector } from 'react-redux';
import Articulo from '../components/Articulo'


const SeccionArticuloRubro = ({rubroDenominacion}) => {
    const articulos = useSelector(store=>store.articuloReducers.articulos)
                    
    const articulos_rubro = articulos.filter(articulo => {
        return articulo.rubroArticulo.denominacion === rubroDenominacion
    });


    return (
        <section >
            {
                articulos_rubro.length!==0 &&
                <div className='seccion-articulos-rubro'>
                    <h2>{rubroDenominacion}</h2>
                    <div className='articulos'>
                        
                        {
                            articulos_rubro && articulos_rubro.map((articulo)=>{
                                return (
                                    <Articulo nombre={articulo.denominacion} precio={articulo.precioVenta} imagen={articulo.urlImagen}/>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </section>
    )
}

export default SeccionArticuloRubro