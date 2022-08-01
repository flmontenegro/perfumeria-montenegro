import {React, useEffect, useState} from 'react'
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer =()=> {

    const [productDetail, setProductDetail] = useState({})
    const [loading,setLoading] = useState(true);
    const {itemId} = useParams();

     useEffect(() => {
    const db = getFirestore();

    const docRef = doc(db,'productos',itemId);
    getDoc(docRef).then((item)=>{
  
      const aux = {...item.data(), id:item.id};
      setProductDetail(aux)
      setLoading(false);
      })
  
  }, [itemId])
  
    return ( <ItemDetail {...productDetail} />
  )
}

export default ItemDetailContainer