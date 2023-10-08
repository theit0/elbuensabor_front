import '../styles/Footer.css'
import twitterLogo from '../assets/brand-twitter-filled.svg'
import instagramLogo from '../assets/brand-instagram.svg'
import fbLogo from '../assets/brand-facebook-filled.svg'
import githubLogo from '../assets/brand-github-filled.svg'
import logobs from '../assets/logobs.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
      <div className='section-1'>
        <b>Acerca de nosotros</b>
      
        <p className="descripcion-footer"> 
          El buen sabor es una plataforma integral que conecta a restaurantes, 
          clientes y repartidores en un ecosistema de entrega de comida eficiente y conveniente.
          Esta plataforma ofrece una experiencia completa, desde realizar pedidos de comida hasta 
          administrar empleados y gestionar relaciones con los clientes.
        </p>
  
        <div className="logos">
          <Link><img src={twitterLogo}/></Link>
          <Link><img src={fbLogo}/></Link>
          <Link><img src={instagramLogo}/></Link>
          <Link><img src={githubLogo}/></Link>
        </div>
      </div>


      <img src={logobs} className='logobs'/>

      <div className='section-2'>
        <section className="section-empresa">
          <b>Empresa</b>
          <Link>Acerca</Link>
          <Link>Características</Link>
          <Link>Trabajos</Link>
          <Link>Carrera</Link>
        </section>

        <section className="section-ayuda">
          <b>Ayuda</b>
          <Link>Atención al cliente</Link>
          <Link>Detalle de entrega</Link>
          <Link>Términos y condiciones</Link>
          <Link>Política y privacidad</Link>
        </section>
      </div>
    </footer>
  )
}

export default Footer