import React from "react";
import ItemCount from '../ItemCount/ItemCount'

const itemDetail = ({id, price, title, pictureUrl}) => {
  return (
    <div className={"ItemListContainer flex grid-cols-3 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/4 p-4 flex-none"}>  
        <div className={'m-5  max-w-sm bg-grey rounded-lg border border-gray-200 shadow-md dark:border-gray-900 bg-stone-400/20'}> 
        <img src={pictureUrl} alt=""/> 
        <div className={"p-5"}> 
        <a href="perfumes.html">
          <h5 className={"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black"}>{title} - {id}</h5> </a> 
        <p className={"mb-3 font-mono text-white dark:text-black"}>${price}</p> 
        </div>  
        <ItemCount stock={5} initial={1}/>
        </div> 
    </div> 
)}


export default itemDetail