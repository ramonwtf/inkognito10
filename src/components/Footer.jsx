
import { Link, NavLink } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer className="container-fluid">
      <div className="style-fo">
        <img className="img-logo img-footer" src="/img/logotipo.png" alt="logotipo"></img>

      </div>

        <div className="footer-menu">
          <h4>Menu</h4>
          <ul>
            <li className="footer-item">
              <NavLink to="/" className="menu-link">inicio</NavLink>
            </li>
            <li className="footer-item">
              <NavLink to="/nosotros" className="menu-link">nosotros</NavLink>
            </li>
            <li className="footer-item">
              <NavLink to="/contacto" className="menu-link">contacto</NavLink>
            </li>
            <li className="footer-item">
              <NavLink to="/alta" className="menu-link">alta</NavLink>
            </li>

          </ul>
        </div>

        <div className="footer-ubi">
          <h4>Ubicacion</h4>
          <Link to="#" className="menu-link">11 de septiembre de 1888 </Link>
        </div>
        
        
        <div className="iconos-fo">
           <Link to="#" ><i className="icon-color icons fa-brands fa-facebook fa-beat-fade fa-2xl"></i></Link>
          <Link to="#"><i className="icon-color icons fa-brands fa-twitter fa-beat-fade fa-2xl"></i></Link>
          <Link to="#" ><i className="icon-color icons fa-brands fa-instagram fa-beat-fade fa-2xl"></i></Link>
          <Link to="#" ><i className="icon-color icons fa-brands fa-github fa-beat-fade fa-2xl"></i></Link>
        </div>

    </footer>
    </div>
  )
}

export default Footer