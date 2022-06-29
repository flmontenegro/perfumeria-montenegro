import React from "react";
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const itemDetail = ({ id, price, title,marca, pictureUrl, category, productDetail, description, presentacion}) => {
  function onAdd() {
    alert("Producto añadido al carrito");
    }
  return (
    <div className={" flex place-content-center  center "}>  
        <div className={'m-5  max-w-sm bg-grey rounded-lg border border-gray-200 shadow-md dark:border-gray-900 bg-stone-400/20'}> 
        <img src={pictureUrl} alt=""/> 
        <div className={"p-5"}>  
          <h2 className={"mb-2 text-l font-light tracking-tight text-gray-900 dark:text-black"}>{marca}</h2>
          <h2 className={"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black"}>{title}</h2>
          <div>
          <p className=" parrafo bg-grey w-24 rounded-full border border-gray-200 shadow-md dark:border-gray-900 bg-stone-400/20 m-auto ">{presentacion}</p>
        </div>
          <h2 className={"mb-2 pt-6 text-l underline font-bold tracking-tight text-gray-900 dark:text-black"}>DESCRIPCION</h2>
          <p className={"mb-5 parrafo  text-white dark:text-black"}>{description}</p>
        <p className={"text-2xl mb-5 font-bold text-white dark:text-black"}>${price}</p> 
        </div>  
        <ItemCount stock={5} initial={1} onAdd={onAdd} productDetail={productDetail}/>
        </div> 
    </div> 
)}


export default itemDetail