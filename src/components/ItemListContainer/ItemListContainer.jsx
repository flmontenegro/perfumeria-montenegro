import React, {useEffect, useState} from "react"; 
import ItemList from "../ItemList/ItemList"; 
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

export default function ItemListContainer() { 
    const [productList, setProductList] = useState ([]) 
    const [loading,setLoading] = useState(true);
    const {categoryId} = useParams()
    useEffect (() => { 

        const db = getFirestore();
        let collectionRef =undefined;
        if (!categoryId){
         collectionRef = collection(db,'productos');
        }else{
           collectionRef = query(collection(db, 'productos'), where ('category', '==', categoryId));
          
        }
        
        
        getDocs(collectionRef).then((res)=>{
         
            const auxArray = res.docs.map((item)=> ({...item.data(), id:item.id}));  
            setProductList(auxArray);
            setLoading(false);
        
        })
        
        
        }, [categoryId])
        
return ( 
<div> 
    <h1 className={'text-[30px] md:text-[40px] lg:text-[50px]  font-semibold text-zinc-500 font-serif'}>WELCOME!</h1>
    <h2 className={'text-[20px] md:text-[30px] lg:text-[30px]  font-semibold text-zinc-500 font-serif'}> Encuentre su perfume favorito</h2>
<ItemList productList={productList}/> 
</div> 
) 
}