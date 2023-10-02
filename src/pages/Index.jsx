import '../styles/Index.css'
import ensalada from '../assets/ensalada.png'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
      <main>
          <div className='banner'>
            <div className='banner-text'>
                <h2>¡50% OFF EN ENSALADAS!</h2>
                <Link to='/'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 6l6 6l-6 6"></path>
                  </svg>
                  Ver más
                </Link>
            </div>
            <div>
              <img src={ensalada} width={300}/>
            </div>
          </div>

          <div className='search-container'>
              <input placeholder='Buscar comida'/>
              <button>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="15" height="15" viewBox="0 0 24 24" stroke-width="2" stroke="#929191" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                    <path d="M21 21l-6 -6"></path>
                  </svg>
              </button>
          </div>
      </main>
  )
}

export default Index