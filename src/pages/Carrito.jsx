import { useContext } from 'react'
import CarritoContext from '../contexts/CarritoContext'
import ItemCarrito from '../components/ItemCarrito'
import ModeDark from '../components/ModeDark'

const Carrito = () => {
  const { carrito, cantidadArticulosCarritoContext, totalFinal, guardarCarritoContext, ivaTotal, totalSinIva } = useContext(CarritoContext)

  

  return (

    <section className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <div className="card mb-4">
              <div className="bag-carrito card-header py-4">
                <h5 className="mb-0"> <strong className='strong-pago'> Carrito - {cantidadArticulosCarritoContext()} articulos</strong></h5>
              </div>

              <div className="bag-card card-body" id="lista-compra">
                  {
                    carrito && carrito.map(item => (
                      <ItemCarrito key={item.id} itemProducto={item} />
                    ))
                  }

                
            </div>

          </div>

          <div className="col-12">
            <div className="card mb-4">
              <div className="bag-carrito card-header py-3">
                <h5 className=" mb-0"> <strong className='strong-pago'>Resumen carrito</strong></h5>
              </div>
              <div className="bag-card card-body">
                <ul className=" list-group list-group-flush">
                  <li className=" bag-li list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    <strong className='strong-pago'>Productos</strong>
                    <span >${totalSinIva.toFixed(2)}</span>
                  </li>
                  <li className=" bag-li list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  <strong className='strong-pago'>Envios</strong>

                  <strong className='strong-pago'>Gratis</strong>

                  </li>

                  <li className="bag-li list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    <div>
                      <strong className='strong-pago'>IVA</strong>
                    </div>
                    <p><strong>${ivaTotal.toFixed(2)}</strong></p>
                  </li>
                  
                  <li className="bag-li list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    <div>
                      <strong className='strong-pago'>Total de la compra</strong>
                      <strong className='strong-pago'>(IVA Incluido)</strong>
                    </div>
                    <p><strong>${totalFinal.toFixed(2)}</strong></p>
                  </li>
                </ul>

                <button type="button" className="back-btn btn btn-lg btn-block mt-4" onClick={guardarCarritoContext}>Ir a pagar</button>

              </div>


  
            </div>
            <div className="card mb-4">
              <div className='bag-carrito card-header py-3'>
              <h5><strong className="strong-pago">Métodos de pago aceptados</strong></h5>
              </div>
              <div className="bag-pagos tarjetas">
                <img src="/img/tarjetas/amex.svg" alt="American Express" className="me-2"></img>
                <img src="/img/tarjetas/master.svg" alt="Mastercard" className="me-2"></img>
                <img src="/img/tarjetas/visa.svg" alt="Visa" className="me-2"></img>
                <img src="/img/tarjetas/paypal.svg" alt="PayPal" className="me-2"></img>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
  )
}

export default Carrito