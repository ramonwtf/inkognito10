
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer className="container-fluid">
      <div className="style-fo">
        <img className="img-logo" src="/img/logotipo.png" alt="logotipo"></img>
        <h4>Lorem ipsum dolor sit amet consectetur.</h4>
        <h4>Lorem ipsum dolor sit amet consectetur.</h4>
        <h4>Lorem ipsum dolor sit amet consectetur.</h4>
        </div>
        <hr></hr>
        <div className="iconos-fo">

        <Link className='icon-color' to=""  ><i className="fa-brands fa-facebook fa-beat-fade fa-2xl"></i></Link>
        
        <Link className='icon-color' to="" ><i className="fa-brands fa-twitter fa-beat-fade fa-2xl"></i></Link>

        <Link className='icon-color' to=""  ><i className="fa-brands fa-instagram fa-beat-fade fa-2xl"></i></Link>

        <Link className='icon-color' to=""  ><i className="fa-brands fa-github fa-beat-fade fa-2xl"></i></Link>
        </div>

    </footer>
    </div>
  )
}

export default Footer