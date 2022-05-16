import React, { useContext } from 'react';
import './CartWidget.css'
import cartImg from'../Assets/img/cart.jpg'
import CartContext from '../../Context/cart-context';

const CartWidget=()=>{
    const{items}=useContext(CartContext);
    let itemsCart=0;

    items.map((item)=>itemsCart = itemsCart + item.qty)
    return(
        <>
            <img src={cartImg} alt='imagen' className='cartImg'/>
            <label className='CartCounter'>{itemsCart}</label>
        </>
    )
}
export default CartWidget;