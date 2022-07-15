import React, { createContext, useState } from 'react'

export const CartContext = createContext(null);

export default function CartProvider({children}) {

  const [ cart, setCart ] = useState([]);

//FUNCION PARA AGREGAR ITEM
const isInCart = (id) => {cart.find((i) => i.id === id);}

function addItem(item, quantity) {
  if(isInCart (item.id)){
      const auxCart = cart;
      const itemRep = auxCart.findIndex(i => i.id === item.id);
      auxCart[itemRep]["quantity"] += quantity;

      setCart(auxCart);
  }else{
      setCart([...cart, {...item, cantidad:quantity}]);
  }
}
// FUNCION BORRAR ITEM
function removeItem(id) {setCart(cart.filter((i) => i.id !== id ) );}

// FUNCION BORRAR TODO
function clear() {setCart([])}

//PRECIO TOTAL
function totalProduct(cart){ 
  const total = cart.reduce((prev, next) => prev + next.quantity, 0);
  return total;
}


    return (
      <>
          <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart,totalProduct }}>
              {children}
          </CartContext.Provider>
      </>
  );
  }
