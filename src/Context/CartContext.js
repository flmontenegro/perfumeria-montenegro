import React, { createContext, useState } from 'react'

export const CartContext = createContext(null);

export default function CartProvider({children}) {

  const [ cart, setCart ] = useState([]);

//FUNCION PARA AGREGAR ITEM
const isInCart = (id) => {cart.find((i) => i.id === id);}

function addItem(item, quantity) {
  let productoDuplicado = isInCart(item.id);
  if(productoDuplicado){
      removeItem(productoDuplicado.id);
      setCart( [...cart, {...item, cantidad:quantity + productoDuplicado.cantidad}] )
  }else{
      setCart([...cart, {...item, cantidad:quantity}])
  }
  console.log("cart ", JSON.stringify(cart))
}
console.log(cart)
// FUNCION BORRAR ITEM
function removeItem(id) {setCart( cart.filter((i) => i.id !== id ) );}

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
