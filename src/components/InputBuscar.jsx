import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { get_articulos_denominacion } from '../store/actions/ArticuloActions';

const InputBuscar = () => {

    const dispatch = useDispatch();

    let inputSearch = useRef()


    const manejarBusquedaPorDenominacion = () => {
        dispatch(get_articulos_denominacion({
          denominacion: inputSearch.current.value
        }))
    }
        


    return (
      <div className='search-container'>
          <input type="text" placeholder='Buscar comida' ref={inputSearch} onChange={manejarBusquedaPorDenominacion}/>
          <button>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="15" height="15" viewBox="0 0 24 24" stroke-width="2" stroke="#929191" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
              <path d="M21 21l-6 -6"></path>
              </svg>
          </button>
      </div>
    )
}

export default InputBuscar