import '../styles/Articulo.css'
import { Link } from 'react-router-dom'

const Articulo = ({nombre,precio,imagen}) => {
    return (
        <article className='articulo'>
            <div className='articulo-imagen-container'>
                <img src={imagen}/>
            </div>
            <div className='articulo-nombre'>
                <h4>{nombre.toUpperCase()}</h4>
                <span>${precio}</span>
            </div>
            <div className='articulo-botones'>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="15" height="15" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                        <path d="M12.5 17h-6.5v-14h-2"></path>
                        <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5"></path>
                        <path d="M16 19h6"></path>
                        <path d="M19 16v6"></path>
                    </svg>
                    Añadir al carrito
                </button>
                <Link to='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-search" width="15" height="15" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M15 8h.01"></path>
                        <path d="M11.5 21h-5.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5"></path>
                        <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                        <path d="M20.2 20.2l1.8 1.8"></path>
                        <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l2 2"></path>
                    </svg>
                    Ver más
                </Link>
            </div>
        </article>
    )
}

export default Articulo