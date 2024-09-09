import React, { useRef } from 'react'
import './formContacto.css'
import emailjs from '@emailjs/browser'


const FormContacto = () => {

    const refForm = useRef()

    const handleSubmit = (e) => {
      e.preventDefault() 

      const serviceId = 'service_mvk7xyl'
      const templateId = 'template_t2mo1nd'
      const apiKey = 'IiKRBJoUI-RRnLYtn'

      emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
      .then(result => console.log(result.text))
      .catch(error => console.log(error))
    }

  return (
    <div className='form-style'>
    <form ref={refForm} onSubmit={handleSubmit} >
        <div className='mt-5'>

            <div className="input-group mb-3 ">
              <input type="text" name='name' className="form-control" placeholder="Escribe tu nombre" required ></input>
            </div>


            <div className="input-group mb-3">
              <input type="text" name='email' className="form-control" placeholder="Escribe tu email" required></input>
            </div>

            <div className="input-group mb-3">
              <textarea type="text" name='message' className="form-control" placeholder="Escribenos tu mensaje"></textarea>
            </div>

            
            <div className='btn-div'>
              <button type='submit' className="btn-submit btn-co btn-primary">Enviar</button>
            </div>
            

        </div>
    </form>
    
</div>
  )
}

export default FormContacto