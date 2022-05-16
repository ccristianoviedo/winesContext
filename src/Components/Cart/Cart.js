import React, { useContext} from 'react'
import CartContext from '../../Context/cart-context'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Cart.css'
import ItemCart from '../ItemCart/ItemCart'

const Cart = () => {
    const {items, clearItems}=useContext(CartContext)
   
    return (
        <>
        <div className='cart'>
            <div className='cartElement'>
                {
                    items.map((item)=>
                        <ItemCart key={item.id} item={item}/>
                    )
                }
            </div>
            <div className='btnCancel'>
                <button className="btn btn-danger btnEnd" onClick={()=>clearItems()}>BORRAR TODOS LOS PRODUCTOS</button>
            </div>
        </div>
    </>
  )
}
export default Cart;