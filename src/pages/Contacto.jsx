import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Contacto.css";
import FormContacto from "../components/formContacto";

const Contacto = () => {
  useEffect(() => {
    document.title = "Tienda EIT - Contacto";
  }, []);

  return (
    <>
    <main className="main-style container">
      <div className="ancho-con card mb-3">
        <div className="row g-0">
          <div className=" container">
            <div className="card-body ">
              <h2 className="card-title">
                Contactanos por via <strong className="envio">WhatsApp</strong>{" "}
              </h2>
              <p className="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                animi ipsa libero omnis cum reprehenderit tempore quisquam,
                nihil, pariatur harum optio veritatis delectus sunt autem sit
                tenetur aperiam repellat. Fugit!
              </p>
              <ul>
                <li className="icon-color list-group-item mt-5">
                  <i className="fa-brands fa-whatsapp fa-2xl"></i>
                  <span>1137623604</span>
                </li>
              </ul>
              <h2 className="card-title">Seguinos en nuestras redes</h2>
              <div className="contacto-iconos">
                <ul>
                  <li>
                    <Link className="icon-color" to="">
                      <i className="fa-brands fa-facebook fa-beat-fade fa-2xl"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="icon-color" to="">
                      <i className="fa-brands fa-twitter fa-beat-fade fa-2xl"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="icon-color" to="">
                      <i className="fa-brands fa-instagram fa-beat-fade fa-2xl"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="icon-color" to="">
                      <i className="fa-brands fa-github fa-beat-fade fa-2xl"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </main>
    </>

  

  
  );
};

export default Contacto;
