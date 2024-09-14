
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Nosotros.css'

const Nosotros = () => {

  useEffect(() => {
    document.title = 'Tienda EIT - Nosotros'
  }, [])

  return (
    <main className="container mt-5">

      <div className="row">

        <div className="back-noso col-md-7 shadow-lg ">
            <h1 className="titulo-noso">Sobre <span>Nosotros</span></h1>
            
            <p className="font-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci alias quas vitae corporis ut quos deleniti maiores modi autem porro!</p>
            <p className="font-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consectetur veritatis quidem, minus ducimus eum?</p>
          </div>

          <div className="col-md-5">
            <div className="">
              <img className="img-noso img-fluid mt-5 shadow-lg" src="/img/carrito-compras.webp" alt="carrito-compras"></img>
            </div>
          </div>

          <div className="back-noso col-md-7 shadow-lg mb-5 mt-5">
            <h2>Nos comprometemos a hacer <strong className='envio'>ENVIOS</strong> a todo el país</h2>

            <p className="font-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit commodi sit maiores voluptatibus repudiandae velit mollitia eligendi suscipit dicta cum. Voluptas ut ipsum nisi ducimus illo iusto praesentium nihil. Dignissimos.</p>

          </div>

          <div className="col-md-5">
            <div className="">
              <img className="img-noso img-fluid mt-5 mb-5  shadow-lg" src="/img/delivery.webp" alt="delivery"></img>
            </div>

          </div>
            
          <div className="back-noso col-md-7 shadow-lg">
            <h2><strong className='envio'>Garantia</strong> absoluta en productos verificados</h2>

            <p  className="font-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ut repellendus deserunt et, non sint. Magnam, perferendis dolor laboriosam officiis sed eaque soluta explicabo quibusdam earum aliquid accusantium libero saepe</p>
        </div>

      <div className="col-md-5">
        <div className="">
          <img className="img-noso img-fluid mt-5 shadow-lg" src="/img/garantia.webp" alt="garantia"></img>
        </div>
      </div> 
      
      
    </div>
    </main>
  )
}

export default Nosotros