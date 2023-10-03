import '../styles/Index.css'

import Banner from '../components/Banner'
import InputBuscar from '../components/InputBuscar'
import ListaFiltro from '../components/ListaFiltro'


const Index = () => {

  
  
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
          
      </main>
  )
}

export default Index