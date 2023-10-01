import '../styles/Navbar.css'
import logo from '../assets/logobs.svg'
import { Link } from 'react-router-dom'
import Navlink from './Navlink'
import inicio from '../assets/home.svg'
import login from '../assets/login.svg'
import carrito from '../assets/shopping-cart.svg'

const Navbar = () => {
  return (
    <header>
         <article>
            <img src={logo}/>
         </article>  
         <nav>
            <Navlink svg={inicio} content='Inicio' to='/'/>
            <Navlink svg={login} content='Acceder' to='/login'/>
            <Navlink svg={carrito} content='Carrito' to='/carrito'/>
         </nav>   
    </header>
  )
}

export default Navbar