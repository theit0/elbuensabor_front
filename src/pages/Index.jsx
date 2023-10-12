import '../styles/Index.css'

import Banner from '../components/Banner'

import { useDispatch, useSelector } from 'react-redux'
import { get_articulos} from '../store/actions/ArticuloActions'
import { useEffect } from 'react'
import BarraFiltros from '../components/BarraFiltros'
import SeccionArticulos from '../components/SeccionArticulos'


const Index = () => {


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_articulos())
    },[]);


    return (
        <main>
            <Banner/>
            
            <BarraFiltros/>

            <SeccionArticulos/>
        </main>
    )
}

export default Index