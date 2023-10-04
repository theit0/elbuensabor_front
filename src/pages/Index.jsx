import '../styles/Index.css'

import Banner from '../components/Banner'


import Articulo from '../components/Articulo'
import { useDispatch, useSelector } from 'react-redux'
import { get_articulos } from '../store/actions/ArticuloActions'
import { useEffect } from 'react'
import BarraFiltros from '../components/BarraFiltros'



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
            <BarraFiltros/>
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