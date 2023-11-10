import { useContext, useEffect } from 'react'
import Card from '../components/Card'
import ProductosContext from '../contexts/ProductosContext'
import Carrusel from '../components/Carrusel'

const Inicio = () => {
  const { productos } = useContext(ProductosContext)

  useEffect(() => {
    document.title = 'Tienda EIT - Inicio'
  }, [])

  return (
    <>
      

    <Carrusel/>
    <section className="row my-5">
    
        
        {
          productos && productos.map(producto => (
            <Card key={producto.id} producto={producto} />
          ))
        }

    </section>
    
    </>


    
  )
}

export default Inicio