import React, { useContext} from 'react';
import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../Context/cart-context';
import { Link } from 'react-router-dom';

const ItemDetails=({item})=>{
    const{addItem}=useContext(CartContext);

    return (
        <div className='item'>
            <div className='imgItem'>
                <img src={item.img} alt={item.name} className='imgUrl'/>
            </div>
            <div className='itemText'>     
                <p>BODEGA: {item.name}</p>
                <p>DESCRIPCION:  {item.description}</p>
                <p>COSECHA: {item.harvest}</p>
                <p>VARIEDAD: {item.variety}</p>
                <p>CRIANZA: {item.breeding}</p>
                <p>SUGERENCIA: {item.suggest}</p>
                <p>STOCK: {item.stock}</p>
                <button className="btn btn-danger btnEnd"><Link to='/Cart'>Finalizar Compra</Link></button>                               
                <ItemCount item={item} stock={item.stock} initial={1} addItem={addItem}/>                
            </div>   
        </div>
    ) 
}
export default ItemDetails;
