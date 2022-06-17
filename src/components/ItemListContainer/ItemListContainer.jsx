import React from "react";
import Belle from "../ItemListContainer/ImgItemList/la-vie-est-belle.jpg"
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({title, price, greeting}) => {
    return (
<div className="ItemListContainer"> 
<h1 className=" m-10 text-3xl font-semibold  text-gray-400 dark:text-white shadow-md dark:border-gray-700 bg-stone-400/50">{greeting}</h1>
<div className=" m-20 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700 bg-stone-400/20">
<a href="perfumes.html">
<img className="rounded-t-lg" src={Belle} alt=""/>
</a>
<div className="p-5">
<a href="perfumes.html">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
</a>
<p className="mb-3 font-normal text-white dark:text-white">{price}</p>
<div> <ItemCount stock={5} initial={1} onAdd="onAdd" /> </div>
</div>
</div>
</div>

)
}
export default ItemListContainer
