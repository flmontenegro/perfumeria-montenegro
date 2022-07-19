import React, { createContext, useState } from 'react'

export const CartContext = createContext(null);

export default function CartProvider({children}) {

  const [ cart, setCart ] = useState([]);

//FUNCION PARA AGREGAR ITEM
const isInCart = (id) => { return cart.find((i) => i.id === id);}

function addItem(item, quantity) {
  console.log(item.id)
  console.log (!!isInCart(item.id))
  if(!!isInCart (item.id)){
      const auxCart = cart;
      const itemRep = auxCart.findIndex(i => i.id === item.id);
      auxCart[itemRep]["cantidad"] += quantity;
      auxCart[itemRep]["subtotal"] += (item.price * quantity)
      setCart([...auxCart]);
  }else{
      setCart([...cart, {...item, cantidad:quantity, subtotal: item.price * quantity}]);
  }
}
// FUNCION BORRAR ITEM
function removeItem(id) {setCart(cart.filter((i) => i.id !== id ) );}

// FUNCION BORRAR TODO
function clear() {setCart([])}



    return (
      <>
          <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart }}>
              {children}
          </CartContext.Provider>
      </>
  );
  }
