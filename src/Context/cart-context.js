import{ createContext } from "react";
import { useState } from "react";

const CartContext = createContext([])

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([]);
    
    const isInCart=(id)=>{
      const found=items.find(item=> item.id===id)
      return found
    }
    const addItem=(item, counter)=>{
      isInCart(item.id)
      ?
      setItems(items.map((itemInCart)=>{
      if(itemInCart.id === item.id){
        itemInCart.qty += counter}
      return itemInCart
      }))
      :
      setItems([...items,{...item, qty:counter}])
      
    }
    const removeItem=(id)=> {
      setItems(items.filter(item=>item.id!==id))
    }
    const clearItems=()=>{
      setItems([])
    }
    return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      clearItems
      }}>
        {children}
    </CartContext.Provider>
  )
}
export default CartContext;