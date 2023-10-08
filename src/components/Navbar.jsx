import '../styles/Navbar.css'
import logo from '../assets/logobs.svg'
import { Link } from 'react-router-dom'
import Navlink from './Navlink'
import inicio from '../assets/home.svg'
import login from '../assets/login.svg'
import carrito from '../assets/shopping-cart.svg'
import { useState } from 'react'

const Navbar = () => {

  const [isMenuToggled,setIsMenuToggled] = useState(false);

  return (
    <header>
         <article>
            <Link to='/'>
              <img src={logo} width={100}/>
            </Link>
         </article>  
         <nav>
            <div className={isMenuToggled ? 'navlinks-dropped' : 'navlinks'} >
                <Navlink svg={inicio} content='Inicio' to='/'/>
                <Navlink svg={carrito} content='Carrito' to='/carrito'/>
                <Navlink svg={login} content='Acceder' to='/login'/>
            </div>
            
            <button className='dropdown-button' onClick={() => setIsMenuToggled(!isMenuToggled)}>
                {
                  isMenuToggled &&
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M18 6l-12 12"></path>
                    <path d="M6 6l12 12"></path>
                  </svg>
                }
                {
                  !isMenuToggled &&
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 6l16 0"></path>
                    <path d="M4 12l16 0"></path>
                    <path d="M4 18l16 0"></path>
                  </svg>
                }
            </button>
         </nav>   
    </header>
  )
}

export default Navbar