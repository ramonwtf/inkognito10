import React, {  } from 'react'
import TablaRowAlta from './TablaRowAlta'
import { useContext } from 'react'
import ProductosContext from '../contexts/ProductosContext'
import './TablaAlta.css'

const TablaAlta = () => {
    const { productos } = useContext(ProductosContext)
  return (
    <>
            <h2>Tabla de Productos</h2>

            <div className='table-border'>

                 <table className=' table  table-striped'>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Color</th>
                            <th>Caracteristicas</th>
                            <th>Precio</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productos && productos.map((producto) => (
                                <TablaRowAlta key={producto.id} producto={producto}/>
                            )) 
                        }
                    </tbody>
                </table>
            </div>
            
            
        </>
  )
}

export default TablaAlta