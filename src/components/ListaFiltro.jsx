import { useState } from 'react'
import '../styles/ListaFiltro.css'


const ListaFiltro = ({children, nombreFiltro}) => {

    const [isListaDropped,setIsListaDropped] = useState(false);

    const handleClickLista = () =>{
        setIsListaDropped(!isListaDropped)
    }

    return (
        <div className='lista-container'>
            <button className='filtro-lista' onClick={()=>handleClickLista()}>
                {nombreFiltro}
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-down-filled" width="15" height="15" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" stroke-width="0" fill="currentColor"></path>
                </svg>
            </button>
            
            {
                isListaDropped &&
                <div className='listaDropped'> 
                    {children}
                </div>
            }
        </div>
    )
}

export default ListaFiltro