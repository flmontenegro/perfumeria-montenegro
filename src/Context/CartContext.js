import React, { createContext, useState, useEffect } from 'react'


export const CartContext = createContext(null);

export default function CartProvider({children}) {
//LOCALSTORAGE
  const [ cart, setCart ] = useState(() => { 
    const pStorage = localStorage.getItem("cart");

  try {
    return pStorage ? JSON.parse(pStorage) : [];
  }catch(err){
    console.log(err);
  }});

  useEffect(()=> {
  localStorage.setItem("cart", JSON.stringify(cart))
},[cart])

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

//TOTAL DE PRODUCTOS
function totalProduct(cart){ 
  return cart.reduce((prev, next) => prev + next.cantidad, 0);
}


    return (
      <>
          <CartContext.Provider value={{cart, addItem,totalProduct, removeItem, clear, isInCart }}>
              {children}
          </CartContext.Provider>
      </>
  );
  }
