import '../styles/Footer.css'
import twitterLogo from '../assets/logo-twitter.svg'
import instagramLogo from '../assets/instagram-logo.svg'
import fbLogo from '../assets/logo-fb.svg'
import githubLogo from '../assets/github-logo.svg'

const Footer = () => {
  return (
    <footer>
      <div className='section-1'>
     
        
          <h1 >Acerca de nosotros</h1>
      
        <div className="descripcion-footer"> El buen sabor es una plataforma integral que conecta a restaurantes, 
          clientes y repartidores en un ecosistema de entrega de comida eficiente y conveniente.
          Esta plataforma ofrece una experiencia completa, desde realizar pedidos de comida hasta 
          administrar empleados y gestionar relaciones con los clientes.</div>
      

      <div className="logos">
        <img src={twitterLogo}></img>
        <img src={fbLogo}></img>
        <img src={instagramLogo}></img>
        <img src={githubLogo}></img>
      </div>
      </div>
<div className='section-2'>
      <section className="section-empresa">
        <h1>Empresa</h1>
        <span>Acerca</span>
        <span>Características</span>
        <span>Trabajos</span>
        <span>Carrera</span>
      </section>

      <section className="section-ayuda">
        <h1>Ayuda</h1>
        <span>Atención al cliente</span>
        <span>Detalle de entrega</span>
        <span>Términos y condiciones</span>
        <span>Política y privacidad</span>
      </section>
      </div>
    </footer>
  )
}

export default Footer