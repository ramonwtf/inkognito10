import { useContext } from "react";
import CarritoContext from "../contexts/CarritoContext";
import './Card.css'

const Card = ( { producto } ) => {
  const { agregarCarritoContext } = useContext(CarritoContext)

  const handleComprar = (producto) => {
    console.log('Comprando -> ', producto)
    agregarCarritoContext(producto)
  }

  return (
    <div className="color-card card m-3 shadow-sm" id="width-card">
    <img src={`/img/${producto.foto.split('\\').pop()}`} className="tamano card-img-top img-producto" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">{producto.nombre}</h5>
      <ul className="list-unstyled mt-3 mb-4">
        <li className="list-group-item color">{producto.color}</li>
        <li className="list-group-item">{producto.caracteristicas}</li>
        <li className="precio- list-group-item precio"> ${producto.precio}</li>
      </ul>
      <button href="#" className="back-btn btn" onClick={() => handleComprar(producto)} >Añadir al carrito</button>
    </div>
  </div>
  );
};

export default Card;
