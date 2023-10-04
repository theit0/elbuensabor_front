import InputBuscar from '../components/InputBuscar'
import ListaFiltro from '../components/ListaFiltro'
const BarraFiltros = () => {
    return (
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
    )
}

export default BarraFiltros