import React, { useContext } from 'react'
import ProductosContext from '../contexts/ProductosContext'

const TablaRowAlta = ({producto}) => {

    const { eliminarProductoContext} = useContext(ProductosContext)

    const handleEliminar = (id) => {
        //console.log('Estoy eliminando -> ', id)
        eliminarProductoContext(id)
}
  return (
    <tr>
        <td>{producto.nombre}</td>
        <td>{producto.color}</td>
        <td>{producto.caracteristicas}</td>
        <td>{producto.precio}</td>
        <td>
            <button className='btn btn-danger' onClick={() => handleEliminar(producto.id)}>Eliminar</button>
        </td>
    </tr>
  )
}

export default TablaRowAlta