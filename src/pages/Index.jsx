import '../styles/Index.css'

import Banner from '../components/Banner'
import InputBuscar from '../components/InputBuscar'
import ListaFiltro from '../components/ListaFiltro'

import Articulo from '../components/Articulo'
import { useDispatch, useSelector } from 'react-redux'
import { get_articulos } from '../store/actions/ArticuloActions'
import { useEffect } from 'react'



const Index = () => {

    const articulos = useSelector(store=>store.articuloReducers.articulos);
    console.log(articulos)


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_articulos())
    },[]);


    return (
        <main>
            <Banner/>
            <section className='barra-filtros'>
                <ListaFiltro nombreFiltro="Rubro">
                    <span>Rubro1</span>
                    <span>Rubro2</span>
                    <span>Rubro3</span>
                </ListaFiltro>
                <ListaFiltro nombreFiltro="Ordenar por">
                    <span>PrecioMasBajo</span>
                    <span>PrecioMasAlto</span>
                    <span>ProductoConPromoción</span>
                </ListaFiltro>
                <InputBuscar/>
            </section>
            
            <section className='articulos'>
                {
                    articulos && articulos.map((articulo)=>{
                        return (
                            <Articulo nombre={articulo.denominacion} precio={articulo.precioVenta} imagen={articulo.urlImagen}/>
                        )
                    })
                }
            </section>

        </main>
    )
}

export default Index