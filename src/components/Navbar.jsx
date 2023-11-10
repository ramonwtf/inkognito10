import { Link, NavLink, useNavigate } from "react-router-dom"
import ItemCarritoInicio from "./ItemCarritoInicio"
import { useContext } from "react"
import CarritoContext from "../contexts/CarritoContext"
import Swal from "sweetalert2"
import ModeDark from "./ModeDark"




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

  return (
    
  <header>
    <nav className="padding-nb navbar navbar-expand-lg ">
      <Link className="navbar-brand" to="/"><img src="/img/logotipo.png" alt="..."></img></Link>

      <div className="container-fluid d-flex justify-content-between">
    
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="margin-le collapse navbar-collapse" id="navbarNav"  >

          <ul className="navbar-nav mx-auto">
            <li className="margin-n nav-item">
              <NavLink className="estilo-bo nav-link active" aria-current="page" to="/">INICIO</NavLink>
            </li>
            <li className="margin-n nav-item">
              <NavLink className="estilo-bo margin-lr nav-link active" to="/nosotros">NOSOTROS</NavLink>
            </li>
            <li className="margin-n nav-item">
              <NavLink className="estilo-bo nav-link active" to="/contacto">CONTACTO</NavLink>
            </li>
            <li className="margin-n nav-item">
              <NavLink className="alta-m estilo-bo nav-link active" to="/alta">ALTA</NavLink>
            </li>
          </ul>
        </div>
      </div>

        <ModeDark/>
        
        <div className="d-flex">
          <div className="dropdown dropstart">
            <a type="button" className="carrito-po posicion-car" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa-solid fa-cart-shopping fa-2xl"></i>
            </a>
            <ul  className="dropdown-menu mx-2">
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
                <button  className="btn btn-co btn-primary" onClick={handleVaciarCarrito}>Vaciar carrito</button>
                <button  className="btn btn-co btn-danger" onClick={handleComprar} >Procesar compra</button>
              </div>
            </ul>
          </div>
      </div>
    </nav>
  </header>
    
  )
}

export default Navbar