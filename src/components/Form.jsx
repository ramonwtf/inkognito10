import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import ProductosContext from '../contexts/ProductosContext'
import './Form.css'

const formInicial = {
  id: null,
  nombre: '',
  color: '',
  caracteristicas: '',
  precio: '',
  foto: ''
}

const Form = () => {
  const { crearProductoContext} =  useContext(ProductosContext)
const [form, setform] = useState(formInicial)

const handleChange = (e) => {
  setform({
    ...form,
    [e.target.name]: e.target.value
  })
}
  const handleSubmit = (e) => {
    e.preventDefault()
    crearProductoContext(form)
  }



  return (
<div className='form-style'>
    <form onSubmit={handleSubmit} >
        <div className='mt-5'>

            <div className="input-group mb-3 ">
              <input type="text" name='nombre' className="form-control" placeholder="titulo del producto"  onChange={handleChange} value={form.nombre}></input>
            </div>


            <div className="input-group mb-3">
              <input type="text" name='color' className="form-control" placeholder="Color del producto" onChange={handleChange} value={form.color}></input>
            </div>

            <div className="input-group mb-3">
              <input type="text" name='caracteristicas' className="form-control" placeholder="Caracteristicas del producto" onChange={handleChange} value={form.caracteristicas}></input>
            </div>

            <div className="input-group mb-3">
              <input type="text" name='precio' className="form-control" placeholder="Precio del producto" onChange={handleChange} value={form.precio}></input>
            </div>

            <div className="input-group">
              <input type="file" name='foto' className="form-control" id="inputGroupFile04" aria-label="Upload" onChange={handleChange} value={form.foto}></input>
            </div>
            
            <div className='btn-div'>
              <button type='submit' className="btn-submit btn-co btn-primary">Crear producto</button>
            </div>
            

        </div>
    </form>
    
</div>
  )
}

export default Form