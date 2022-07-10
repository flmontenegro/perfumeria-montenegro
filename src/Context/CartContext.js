import React, { createContext, useState } from 'react'

export const myContext = createContext(null);

export default function CartContext({children}) {

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
// FUNCION BORRAR ITEM
function removeItem(itemId) {setCart( cart.filter((i) => i.id !== itemId ) );}

// FUNCION BORRAR TODO
function clear() {setCart([])}

    return (
      <>
          <myContext.Provider value={{cart, addItem, removeItem, clear }}>
              {children}
          </myContext.Provider>
      </>
  );
  }
