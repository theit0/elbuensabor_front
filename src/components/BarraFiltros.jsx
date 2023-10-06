import { useDispatch, useSelector } from 'react-redux';
import InputBuscar from '../components/InputBuscar'
import ListaFiltro from '../components/ListaFiltro'
import { get_articulos, get_articulos_precio_asc, get_articulos_precio_desc, get_articulos_rubro } from '../store/actions/ArticuloActions';
import { useEffect } from 'react';
import { get_rubros } from '../store/actions/RubroActions';

const BarraFiltros = () => {
    const rubros = useSelector(store => store.rubroReducers.rubros )

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_rubros())
    },[]);


    const filterRubro = (denom) => {
        dispatch(get_articulos_rubro(denom))
    }

    const filterPrecioMasBajo = () => {
        dispatch(get_articulos_precio_asc())
    }

    const filterPrecioMasAlto = () => {
        dispatch(get_articulos_precio_desc())
    }
    
    return (
        <section className='barra-filtros'>
            <ListaFiltro nombreFiltro="Rubro">
                <button onClick={()=>dispatch(get_articulos())}>Ver todos</button>
                { 
                    rubros && 
                    rubros.map(rubro=>{
                        return <button onClick={()=>filterRubro(rubro.denominacion)}>{rubro.denominacion}</button>
                    })
                }
            </ListaFiltro>
            <ListaFiltro nombreFiltro="Ordenar por">
                <button>Ver todos</button>
                <button onClick={()=> filterPrecioMasBajo()}>Precio mas bajo</button>
                <button onClick={()=> filterPrecioMasAlto()}>Precio mas alto</button>
            </ListaFiltro>
            <InputBuscar/>
        </section>
    )
}

export default BarraFiltros