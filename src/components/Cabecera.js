import React from 'react'

export default function Cabecera({cantidad}) {
  
  return (
    <header>
        <h1>Carrito de compras</h1>
        <p>Cantidad de productos: <span>{cantidad}</span></p>
    </header>
  )
}
