import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

import { createContext } from "react";
import { useState } from "react";
import { post } from "../utils/http";

/* CREANDO CONTEXTO */

// ! 1er -> Creación del contexto
const CarritoContext = createContext()

// ! 2da -> El armado del Provider

const url = 'https://65451d5c5a0b4b04436da82a.mockapi.io/carrito'

const CarritoProvider = ( { children } ) => {
    // ESTADO
    const [ agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, guardarCarrito, carrito ] = useLocalStorage('carrito', [])

    const [totalFinal, settotalFinal] = useState(0)


    const [ivaTotal, setIvaTotal] = useState(0)

    const [totalSinIva, settotalSinIva] = useState(0)

    function elProductoEstaEnElCarrito(producto) {
        return carrito.filter(prod => prod.id === producto.id).length // Me devuelve 0 si no hya producto en el carrito y 1 si hay
    }

    function obtenerProductoDeCarrito(producto) {
        return carrito.find(prod => prod.id === producto.id) // Me retorna si hay un producto en el carrito
    }

    useEffect(() => {
        settotalFinal(precioTotalArticulosCarritoContext())
        setIvaTotal(ivaCarritoContext())
        settotalSinIva(totalSinIvaContext())
        
    }, [carrito])

    


    const agregarCarritoContext = (producto) => {

        if(!elProductoEstaEnElCarrito(producto)) {
            producto.cantidad = 1
            agregarAlCarrito(producto)
        } else {
            const productoDeCarrito = obtenerProductoDeCarrito(producto)
            console.log(productoDeCarrito)
            productoDeCarrito.cantidad++
            guardarCarrito(carrito)
        }

    } 

    const cambiarCantidadCarrritoContext = (productoNuevaCantidad) => {
        try {
            const nuevoCarrito = carrito.map(producto => producto.id === productoNuevaCantidad.id ? productoNuevaCantidad : producto)
            guardarCarrito(nuevoCarrito)            
        } catch (error) {
            console.log('[cambiarCantidadCarrritoContext]: No se pudo guardar el producto con la nueva cantidad', error);
        }


    }

    const eliminarProductoCarritoContext = (id) => {
        eliminarDelCarrito(id)
    }

    const guardarCarritoContext = async () => {

        try {
            const carritoGuardado = await post(url, carrito)
            console.log(carritoGuardado);
        } catch (error) {
            console.error('[guardarCarritoContext]: no se pudo guardar el carrito',error);
        }
    }

    const vaciarCarritoContext = () => {
        vaciarCarrito()
    }

    const cantidadArticulosCarritoContext = () => {
        let sumaTotalArticulos = carrito.reduce((total, producto) => {
            return total + producto.cantidad
        }, 0)
        return sumaTotalArticulos
    }

    const precioTotalArticulosCarritoContext = () => {
        let sumaTotal = carrito.reduce((total, producto) => {
            return total +  (producto.precio * producto.cantidad)
        }, 0)
        return sumaTotal
    }


const ivaCarritoContext = () => {
    let ivaImpuesto = carrito.reduce((total, producto) => {
        return total + (producto.precio * producto.cantidad * 0.18)
    }, 0)
     
       
    return ivaImpuesto

}

const totalSinIvaContext = () => {
    let totalSinIva = carrito.reduce((total, producto) => {
        let impuesto = (producto.precio * producto.cantidad * 0.18)
        return total + (producto.precio * producto.cantidad - impuesto )
    }, 0)
     
       
    return totalSinIva
}

    const data = {
         carrito,
         agregarCarritoContext, 
         eliminarProductoCarritoContext, 
         guardarCarritoContext, 
         vaciarCarritoContext, 
         cantidadArticulosCarritoContext,
         totalFinal,
         ivaTotal,
         totalSinIva,
         cambiarCantidadCarrritoContext
        }

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}


// ! 3era -> Exportaciones
export { CarritoProvider }

export default CarritoContext