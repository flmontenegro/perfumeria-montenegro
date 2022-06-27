import React, {useEffect, useState} from "react"; 
import ItemList from "../ItemList/ItemList"; 

export default function ItemListContainer() { 
    const [productList, setProductList] = useState ([]) 
    useEffect (() => { 
        let products = [ 
            {id: 1 , title: "212 HEROES", price: '10.000', pictureUrl: 'https://juleriaque.vteximg.com.br/arquivos/ids/184123-1000-1000/212-heroes-for-her-edp-C054449D85291FEC34B3773068DD484A.jpg?v=637834755297430000'}, 
            {id: 2 , title: "MISS DIOR - 100ml", price: '13.000', pictureUrl: 'https://juleriaque.vteximg.com.br/arquivos/ids/177794-1000-1000/miss-dior-edp-2BC2BFEDC5A1BB8C09A6490E464212FC.jpg?v=637678261843170000'}, 
            {id: 3 , title: "XS PURE - 100ml", price: '15.000', pictureUrl: 'https://juleriaque.vteximg.com.br/arquivos/ids/166535-1000-1000/pure-xs-for-her-edp-71B78C8FEBEC27223C2B23F5702FAB7D.jpg?v=637347517235800000' },
            {id: 4 , title: "J'ADORE - 100ml", price: '18.000', pictureUrl: 'https://juleriaque.vteximg.com.br/arquivos/ids/170565-1000-1000/jadore-infinissime-edp--976BFAF0A599FE2361B3395E47D64863.jpg?v=637455397900830000' },
            {id: 5 , title: "SI- ARMANI - 100ml", price: '15.700', pictureUrl: 'https://juleriaque.vteximg.com.br/arquivos/ids/157664-1000-1000/si-edp.jpg?v=637336348274270000' },
            {id: 6 , title: "COCO MADEMOISELLE", price: '19.000', pictureUrl: 'https://juleriaque.vteximg.com.br/arquivos/ids/164551-1000-1000/coco-mademoiselle-intense-edp-AE3E1B6032EA4163346339F94012FDF2.jpg?v=637347501056300000' } ]; 

        new Promise((resolve, reject) => { 
            setTimeout (() => { 
                resolve(products) 
            },2000) 
        }).then ((res)=> { 
            setProductList(res)}) 
         }, []) 
return ( 
<div> 
    <h1 className={'text-[50px] font-semibold text-zinc-500 font-serif'}>BIENVENIDOS!</h1>
<ItemList productList={productList}/> 
</div> 
) 
}