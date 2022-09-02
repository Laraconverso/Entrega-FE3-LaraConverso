import productos from './data.json';
import Item from './Item';

export default function Listado({addItem}) {

  return (
    <div className='container'>
        {productos.map((item) => (
          <Item 
            key={item.id}
            name={item.producto.name}
            description={item.producto.descripcion}
            stock={item.stock}
            addItem={addItem}
          />
        ))}
    </div>
  )
}
