import React from "react";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useState, useContext } from "react";
import "./CheckOut.css"
import { CartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";



export default function CheckOut() {
    const { cart, totalProduct } = useContext(CartContext);
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [email, setEmail] = useState('');
    //mostrar ID de compra
    const [idCompra, setidCompra] = useState(()=>{
        const hayidCompra = localStorage.getItem('idCompra')
        return hayidCompra ? JSON.parse(hayidCompra) : ""
        });


    function handleClickComprar () {
        const pedido = {buyer : {nombre: nombre, email: email,direccion: direccion, ciudad: ciudad}, 
    items : [{cart}],
    date: Date(), 
    totalProduct: totalProduct(cart)} ;
        
if (!nombre || !email || !direccion || !ciudad ) return (Swal.fire('Hay campos sin completar'));
//carga Firebase
const db = getFirestore ();
const collectionRef = collection(db,'orders');
addDoc(collectionRef, pedido).then (({id}) =>  setidCompra(id));
  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: '¡Muchas gracias por tu compra!',
    text:  `ID de compra: ${idCompra} `,
    showConfirmButton: false,
    timer: 4500
  });
    }

return (

    <div className="h-screen grid grid-cols-3">
        <div className="lg:col-span-2 col-span-3 bg-white-50 space-y-8 px-12">
            <div className="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
                <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                    <div className="text-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-5 h-6 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="text-sm font-medium ml-3">Checkout</div>
                </div>
                <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">Complete sus datos y detalles de envío a continuación. 
                </div>
                <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>
            </div>
            <div className="rounded-md">
                <form id="payment-form" method="POST" action="">
                    <section>
                        <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Información de envío y facturación</h2>
                        <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                            <label  className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span  className="text-right px-2">Nombre </span>
                                <input onChange={(e) => setNombre(e.target.value)} name="nombre" className="focus:outline-none px-3" placeholder="Nombre" required=""/>
                            </label>
                            <label  className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span  className="text-right px-2">Email</span>
                                <input onChange={(e) => setEmail(e.target.value)} name="email" type="email"  className="focus:outline-none px-3" placeholder="try@example.com" required />
                            </label>
                            <label  className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span  className="text-right px-2">Direccion </span>
                                <input onChange={(e) => setDireccion(e.target.value)} name="direccion" className="focus:outline-none px-3" placeholder="Direccion" />
                            </label>
                            <label  className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span  className="text-right px-2">Ciudad</span>
                                <input onChange={(e) => setCiudad(e.target.value)} name="ciudad" className="focus:outline-none px-3" placeholder="Ciudad" />
                            </label>
                        </fieldset>
                    </section>
                </form>
            </div>
            <button onClick={handleClickComprar} className="submit-button px-4 py-3 rounded-full bg-pink-400 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
            COMPRAR
            </button>
        </div>
        <div className="col-span-1 bg-white lg:block hidden">
            <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">Detalle de compra</h1>
            { cart.map((row) => (
            <ul className="py-6 border-b space-y-6 px-8">
                <li className="grid grid-cols-6 gap-2 border-b-1">
                    <div className="col-span-1 self-center">
                        <img src={row.pictureUrl} alt="Product" className="rounded w-full" />
                    </div>
                    <div className="flex flex-col col-span-3 pt-2">
                        <span className="text-gray-600 text-md font-semi-bold">{row.title}</span>
                    </div>
                    <div className="col-span-2 pt-3">
                        <div className="flex items-center space-x-2 text-sm justify-between">
                            <span className="text-gray-400">{row.cantidad} x {row.price}</span>
                            <span className="text-pink-400 font-semibold inline-block">$ {row.cantidad * row.price}</span>
                        </div>
                    </div>
                </li>
            </ul>
            ))}
            <div className="px-8 border-b">
                <div className="flex justify-between py-4 text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-pink-500">$ {cart.reduce((p,c) => p + c.subtotal ,0)}</span>
                </div>
                <div className="flex justify-between py-4 text-gray-600">
                    <span>Envío</span>
                    <span className="font-semibold text-pink-500">Gratis</span>
                </div>
            </div>
            <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
                <span>Total</span>
                <span>${cart.reduce((p,c) => p + c.subtotal ,0)}</span>
            </div>
    
        </div>
    </div>
    )
}



