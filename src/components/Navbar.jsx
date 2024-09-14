import { Link, NavLink, useNavigate } from "react-router-dom"
import ItemCarritoInicio from "./ItemCarritoInicio"
import { useContext } from "react"
import CarritoContext from "../contexts/CarritoContext"
import Swal from "sweetalert2"
import ModeDark from "./ModeDark"
import './Navbar.css'




const Navbar = () => {
  const { carrito, vaciarCarritoContext } = useContext(CarritoContext)

  const navigate = useNavigate()

  const handleComprar = () => {
    
    if ( carrito.length !== 0 ) {
      navigate('/carrito') 
    } else {
      Swal.fire( {
        title: 'No hay productos en el carrito de compras!',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#83e79e',
        background: '#E4EFE7'
    });
  }
}
  const handleVaciarCarrito = () => {
    vaciarCarritoContext()
  }

  const ToogleNavbar = () => {
      const menuElement = document.getElementById('menu-')
      menuElement.classList.toggle('menu-show') 
  }

  return (
    
  <header>
    <nav className="navbar-nav">
      <div className="titulo">
        <a href="/" className="menu-link"><img className="img-logo-" src="/img/logotipo.png" alt=""></img></a>
      </div>
        
          <div className=" carrito dropstart">
            <a type="button" className="carrito-" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa-solid fa-cart-shopping fa-2xl"></i>
            </a>

            <ModeDark />


            <ul id="carrito" className=" position-item dropdown-menu mx-2">
              <table id="lista-carrito" className="table">
                <thead>
                  <tr>
                    <th scope="col">Imagen</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {
                        carrito && carrito.map(item => (
                          <ItemCarritoInicio key={item.id} item={item} />
                        ))
                      }
                </tbody>
              </table>
              <div className="d-grid gap-2  justify-content-md-center ms-1">
                <button id="vaciar-carrito" className="btn btn-co btn-primary" onClick={handleVaciarCarrito}>Vaciar carrito</button>
                <button id="procesar-pedido" className="btn btn-co btn-danger" onClick={handleComprar}>Procesar compra</button>
              </div>

            </ul>


          </div>

      

      <div id="toggle-menu" className="toggle-menu" onClick={ToogleNavbar}>
        
        <i className="fa-solid fa-bars fa-xl"></i>
      </div>
      <ul id="menu-" className="menu">
        <li className="menu-item2 menu-item">
          <NavLink to="/" className="menu-link">inicio</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/nosotros" className="menu-link">nosotros</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/contacto" className="menu-link">contacto</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/alta" className=" menu-link">alta</NavLink>
        </li>
      </ul>

      
    </nav>
  </header>
    
  )
}

export default Navbar