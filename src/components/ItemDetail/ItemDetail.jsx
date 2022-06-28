import React from "react";
import ItemCount from '../ItemCount/ItemCount'

const itemDetail = ({ id, price, title, pictureUrl, category, productDetail, description, presentacion}) => {
  function onAdd() {
    alert("Producto añadido al carrito");
    }
  return (
    <div className={"ItemListContainer flex grid-cols-3 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/4 p-4 flex-none"}>  
        <div className={'m-5  max-w-sm bg-grey rounded-lg border border-gray-200 shadow-md dark:border-gray-900 bg-stone-400/20'}> 
        <img src={pictureUrl} alt=""/> 
        <div className={"p-5"}> 
          <h2 className={"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black"}>{title} - {category}</h2>
          <p>{presentacion}</p>
          <h3 className={"mb-5 font-bold text-white dark:text-black"}>{description}</h3>
        <p className={"text-2xl mb-5 font-bold text-white dark:text-black"}>${price}</p> 
        </div>  
        <ItemCount stock={5} initial={1} onAdd={onAdd} productDetail={productDetail}/>
        </div> 
    </div> 
)}


export default itemDetail