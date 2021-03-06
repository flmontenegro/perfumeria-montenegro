import {React, useEffect, useState} from 'react'
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer =()=> {

    const [productDetail, setProductDetail] = useState({})
    const [loading,setLoading] = useState(true);
    const {itemId} = useParams();

     useEffect(() => { 
    //   let products = [ 
    //     {id: 1 , title: "212 HEROES", price: 10000,marca:'Carolina Herrera', category:'CarolinaHerrera', presentacion:'80ml', description:"Notas predominantes: mandarina, frambuesa, flores de jazmin, naranja, cedró y sándalo", pictureUrl: 'https://juleriaque.vteximg.com.br/arquivos/ids/184123-1000-1000/212-heroes-for-her-edp-C054449D85291FEC34B3773068DD484A.jpg?v=637834755297430000'}, 
    //     {id: 2 , title: "MISS DIOR", price: 13000,marca:'Dior',category: 'Dior', presentacion:'50ml', description: "Notas de Corazón: Rosa Centifolia. Notas de Fondo: Maderas tiernas.Notas de Salida: Las notas de un muguete con floralidad fresca, el acorde de peonía expresiva y las notas de suave iris acompañan un bello verdor ligeramente humedecido.Aroma: Floral." , pictureUrl: 'https://juleriaque.vteximg.com.br/arquivos/ids/177794-1000-1000/miss-dior-edp-2BC2BFEDC5A1BB8C09A6490E464212FC.jpg?v=637678261843170000'}, 
    //     {id: 3 , title: "XS PURE", price: 15000,marca:'Paco Rabanne',category:'PacoRabanne',presentacion:'80ml',description:"Notas de entrada: flor de tamarindo, frutos silvestres. Notas de corazón: rosa eléboro. Notas de salida: vainilla negra. Aroma: Floral, amaderada, afrutada.", pictureUrl: 'https://juleriaque.vteximg.com.br/arquivos/ids/166535-1000-1000/pure-xs-for-her-edp-71B78C8FEBEC27223C2B23F5702FAB7D.jpg?v=637347517235800000' },
    //     {id: 4 , title: "J'ADORE", price: 18000 ,marca:'Dior',category:'Dior',presentacion:'100ml', description:"Un aroma floral luminoso, alegre, asentado y decidido. Armoniza flores como la Champaca (variedad de magnolia de la India, de olor fresco, afrutado y exótico), la violeta de Francia y la orquídea cristalizada. Como fondo, la madera de amaranto, cuyo aroma recuerda al del clavel con más madera y suavidad; se armoniza con una nota de vino dulce de Banyuls y ciruela confitada.", pictureUrl: 'https://juleriaque.vteximg.com.br/arquivos/ids/170565-1000-1000/jadore-infinissime-edp--976BFAF0A599FE2361B3395E47D64863.jpg?v=637455397900830000' },
    //     {id: 5 , title: "SI- ARMANI", price: 15700 ,marca:'Armani', category:'Armani',presentacion:'100ml', description:"Familia olfativa: Chipre Frutal. Notas de salida: licor de cassis. Notas de corazón: fresia, rosa de mayo, pachulí. Notas de fondo: musgo, maderas claras.",pictureUrl: 'https://juleriaque.vteximg.com.br/arquivos/ids/157664-1000-1000/si-edp.jpg?v=637336348274270000' },
    //     {id: 6 , title: "CH EDT", price: 19000 ,marca:'Carolina Herrera',category:'CarolinaHerrera',presentacion:'80ml',description:"Notas de entrada: Bergamota, Uva. Notas de corazón: Rosa búlgara, Jazmín Sambac. Notas de salida: Pachuli, notas de almendra garrapiñada. Aroma: Floral.",pictureUrl: 'https://juleriaque.vteximg.com.br/arquivos/ids/164491-1000-1000/ch-edt-158CA0E7837E77AC7C1AD0C53C7F3AC1.jpg?v=637347500595000000' } ]; 

    //     new Promise((resolve, reject) => {
    //         setTimeout(()=>{
    //             resolve(products)
    //         },2000 )
    //     }).then(res=> {
    //         const item = res.find((products)=> products.id === Number(itemId))
    //         setProductDetail(item)
    //     })

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