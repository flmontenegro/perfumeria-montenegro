import React, {useEffect, useState} from "react"; 
import ItemList from "../ItemList/ItemList"; 

export default function ItemListContainer() { 
    const [productList, setProductList] = useState ([]) 
    useEffect (() => { 
        let products = [ 
            {id: 1 , title: "COCO MADEMOISELLE EAU DE PARFUM - 100ml", price: 10000, pictureURL: 'https://www.chanel.com/images//t_one/w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620/coco-mademoiselle-eau-de-parfum-spray-3-4fl-oz--packshot-default-116520-8848376659998.jpg'}, 
            {id: 2 , title: "MISS DIOR - 100ml", price: 13000, pictureURL: 'https://juleriaque.vteximg.com.br/arquivos/ids/177794-1000-1000/miss-dior-edp-2BC2BFEDC5A1BB8C09A6490E464212FC.jpg?v=637678261843170000'}, 
            {id: 3 , title: "XS PURE FOR HER - 100ml", price: 15000, pictureURL: 'https://fraguru.com/mdimg/perfume/375x500.51424.jpg' } ]; 

        new Promise((resolve, reject) => { 
            setTimeout (() => { 
                resolve(products) 
            },2000) 
        }).then ((res)=> { 
            setProductList(res)}) 
         }, []) 
return ( 
<> 
<ItemList productList={productList}/> 
</> 
) 
}