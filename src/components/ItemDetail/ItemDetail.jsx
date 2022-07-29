import { React , useState } from "react";
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import {CartContext} from "../../Context/CartContext";
import Swal from "sweetalert2";


const ItemDetail = (productDetail) => {
  const { price, title,marca, pictureUrl, description, presentacion} = productDetail
  const [auxCount,setAuxCount] = useState();
  const { addItem } = useContext(CartContext);

  function onAdd(countParam) {
    setAuxCount (countParam);
    console.log('setAuxCount'+ auxCount)
    addItem(productDetail, countParam)
    Swal.fire({
      title: 'Agregaste',
      text:  `${countParam}  ${title} al carrito`,
      imageUrl: pictureUrl,
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: 'producto',
    });
    }
  
    return (
    <div className={" flex place-content-center  center "}>  
        <div className={'m-5 max-w-sm bg-grey rounded-lg border border-gray-200 shadow-md dark:border-gray-900 bg-stone-400/20'}> 
        <img src={pictureUrl} alt=""/> 
        <div className={"p-5"}>  
          <h2 className={"mb-2 text-l font-light tracking-tight text-gray-900 dark:text-black"}>{marca}</h2>
          <h2 className={"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black"}>{title}</h2>
          <div>
          <p className=" parrafo bg-grey w-24 rounded-full border border-gray-200 shadow-md dark:border-gray-900 bg-stone-400/20 m-auto ">{presentacion}</p>
        </div>
          <h2 className={"mb-2 pt-6 text-l underline font-bold tracking-tight text-gray-900 dark:text-black"}>DESCRIPCION</h2>
          <p className={"mb-5 parrafo  text-black dark:text-black"}>{description}</p>
        <p className={"text-2xl mb-5 font-bold text-white dark:text-black"}>${price}</p> 
        </div>  
        <ItemCount stock={5} initial={1} onAdd={onAdd} productDetail={productDetail}/>
        <Link to={`/Cart`}><button type="button" className="text-white mb-3 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path> FINALIZAR COMPRA
</button></Link>
        </div> 
    </div> 
)}


export default ItemDetail