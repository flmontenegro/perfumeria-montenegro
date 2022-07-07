import React, { createContext, useState } from 'react'

export const myContext = createContext(null);

export default function CartContext({children}) {

  const [ cart, setCart ] = useState([]);

//FUNCION PARA AGREGAR ITEM
  const isInCart = (item) => {
    return cart.some((el) => el.id === item.id);}

function addItem(item,quantity){
    const productCart = {
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: quantity,
      totalPrice: item.price * quantity,
    }

    let noDuplicar = [];
    noDuplicar = cart.reduce((acumulador, newItem) => {
      let inCart = isInCart(productCart) ; 
    
    if (inCart) {
      return acumulador.map ((el) => {
        if (el.id === inCart.id){
          return { ...el, quantity: (el.cantidad + newItem.cantidad)}
   }else {
  return el;
}});
    }else { return [...acumulador, newItem];}}, [])

    setCart(noDuplicar);

    console.log("itemAgregado: ", productCart.title, "  quantity: ", productCart.cantidad);}

    
// FUNCION BORRAR ITEM
  function removeItem(itemId) {
    setCart( cart.filter((el) => el.id !== itemId ) );
}

// FUNCION BORRAR TODO
function clear() {
  setCart([])

}
    return (
      <>
          <myContext.Provider value={{cart, addItem, removeItem, clear }}>
              {children}
          </myContext.Provider>
      </>
  );
  }
