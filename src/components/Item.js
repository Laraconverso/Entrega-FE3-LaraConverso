import { useState } from "react";

export default function Item({photo, name, description, stock,
  addItem}) {

  const [cantStock, setCantStock] = useState(stock);

  function comprar(){
    addItem();
    setCantStock((cant)=> cant - 1);
    console.log("Se resto uno de la cant. en stock.");
  }

  return (
    <div className='producto'>
      <img src={photo} alt="Foto Zapa"></img>
      <h3>{name}</h3>
      <p>{description}</p>
      <h5>En Stock: {cantStock > 0 ? cantStock : <span>Agotado</span>} </h5>
      <button disabled={cantStock <=0} onClick={comprar}>{cantStock > 0 ? 'Comprar' : 'Sin Stock'}</button>
    </div>
  )
}
