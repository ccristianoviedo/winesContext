import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext} from 'react';
import CartContext from '../../Context/cart-context';
import ItemCount from '../../Components/ItemCount/ItemCount';
import '../Item/Item.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Item=({products},{item})=>{
    const{addItem}=useContext(CartContext);

    const navigate = useNavigate()
    return (
        <div className='itemPr'>
            <img src={products.img} alt={products.name} className='imgPr'/>        
            <p>BODEGA:{products.name}</p>
            <p>PRECIO: $ {products.price}</p>
            <p>STOCK: {products.stock}</p>
            <button onClick={()=> navigate(`/item/${products.id}`)} className="btn btn-info">Detalles</button>
            <ItemCount item={item} initial={1} stock={products.stock} addItem={addItem}/>
        </div>
    ) 
}
export default Item;