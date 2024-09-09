import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"
import { get } from "../utils/http"

/* Creando CONTEXTO */

/* 1er -> Creación del contexto */
const ProductosContext = createContext()
/* 2do -> El armado del Provider */
const url = 'https://65451d5c5a0b4b04436da82a.mockapi.io/productos'
console.log(url)

const ProductosProvider = ( { children } ) => {
    const [productos, setProductos] = useState(null)

    useEffect(() => {
        obtenerProductos()
    }, []) // Array de referencias vacío. Esto se ejecuta una sola vez.
    
    // ! GET ALL => OBTENER TODOS LOS PRODUCTOS
    const obtenerProductos = async () => {
        try {
            const productsBack = await get(url)
            setProductos(productsBack)
        } catch (error) {
            console.log(`[obtenerProductos] -> Algo no funcionó -> ${error}`)
        }
    }

    // ! POST => CREACIÓN DE PRODUCTOS
    const crearProductoContext = async (productoNuevo) => {
        
        try {
            /* PETICIÓN ASINCRONICA PARA GUARDAR EL NUEVO USUARIO */
            const config = {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify(productoNuevo)
            }
            
            const respuesta = await fetch(url, config)
            if (!respuesta.ok) {
              throw new Error(`[crearProductoContext] Error... ${respuesta.status}`) // Lanza el error
            }
            const ProductoCreado = await respuesta.json()  
            console.log(ProductoCreado) 
            const nuevaDB = [...productos, ProductoCreado]
            setProductos(nuevaDB)
          } catch (error) {
            console.error('Algo paso con la petición en el [crearProductoContext]', error)
          }


    }

    // ! PUT => EDICIÓN DE PRODUCTOS
    const actualizarProductoContext = (productoEditar) => {

    }

    // ! DELETE => ELIMINAR PRODUCTOS
    const eliminarProductoContext = async (id) => {

        try {
            const config = {
                method: 'DELETE'
            }
            const respuesta = await fetch(`${url}/${id}`, config)
            if (!respuesta.ok) {
                throw new Error(`[eliminarProductoContext] Error... ${respuesta.status}`) // Lanza el error
            }
            const nuevoArray = productos.filter(producto => producto.id !== id)
            setProductos(nuevoArray)
        } catch (error) {
            console.error('Algo paso con la petición en el [eliminarProductoContext]', error)
        }

     }

    const data = { productos, crearProductoContext, actualizarProductoContext, eliminarProductoContext }

    return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>
}


/* 3er -> Exportaciones */
export { ProductosProvider }

export default ProductosContext