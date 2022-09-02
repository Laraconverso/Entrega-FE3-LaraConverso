import Cabecera from './components/Cabecera';
import Listado from './components/Listado';
import {useState} from 'react';

function App() {
  const [cantidad, setCantidad] = useState(0);

  function addItem(){
    setCantidad((cant)=> cant + 1);
    console.log("Se agrego un item al carrito.");
  }

  return (
    <div className="App">
      <Cabecera cantidad={cantidad}/>
      <Listado addItem={addItem}/>
    </div>
  );
}

export default App;