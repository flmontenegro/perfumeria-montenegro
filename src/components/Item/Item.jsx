import React from 'react' 

 export default function Item ({id, price, title, pictureURL}) { 
  return ( 
  <div className="ItemListContainer">  
  <div className=" m-20 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700 bg-stone-400/20"> 
  <a href="perfumes.html"> <img className="rounded-t-lg" src={pictureURL} alt=""/> </a> 
  <div className="p-5"> 
  <a href="perfumes.html"><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}{id}</h5> </a> 
  <p className="mb-3 font-normal text-white dark:text-white">{price}</p> 
  </div>  
  </div> 
  </div> 

     

    ) 

} 