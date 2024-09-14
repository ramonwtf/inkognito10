import React, { useContext, useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import CarritoContext from '../contexts/CarritoContext'
import './ItemCarrito.css'
import BotonEliminar from './BotonEliminar'

const ItemCarrito = ({ itemProducto }) => {
  const {cambiarCantidadCarrritoContext} = useContext(CarritoContext)

  let precioCantidadInicial = itemProducto.precio * itemProducto.cantidad 

  const [total, setTotal] = useState(precioCantidadInicial)

  const [cantidadInput, handleChange ] = useForm({
    cantidad: itemProducto.cantidad
  })

  useEffect(() => {
    let totalRecalculado = Number(itemProducto.precio * cantidadInput.cantidad).toFixed(2)
    setTotal(totalRecalculado)
    itemProducto.cantidad = cantidadInput.cantidad
    cambiarCantidadCarrritoContext(itemProducto)


  }, [cantidadInput.cantidad])

  return (
    <div className='row py-3 mb-3'>
         <div className="col-4 mb-1">
                    <div className="bg-image rounded">
                        <img className="w-100" src={`/img/${itemProducto.foto.split('\\').pop()}`} alt={itemProducto.nombre} />
                    </div>
                    </div>
                    <div className="col-6">
                    <p><strong>{itemProducto.nombre}</strong></p>
                    <p>{itemProducto.color}</p>
                    <p>{itemProducto.caracteristicas}</p>

                    <BotonEliminar />
                    
                    </div>
                    <div className="col-md-2 mt-2">
                    <input
                      type="number"
                      min="1"
                      className="form-control text-center"
                      placeholder="Cantidad"
                      name="cantidad"
                      value={cantidadInput.cantidad}
                      onChange={handleChange} />

                    <p className="text-center mt-4">
                        <strong >${total}</strong>
                    </p>
                </div>
    </div>
  )
}

export default ItemCarrito