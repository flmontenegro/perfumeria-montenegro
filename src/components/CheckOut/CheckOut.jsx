import React from "react";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useState, useContext } from "react";
import "./CheckOut.css"
import { CartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';



export default function CheckOut() {
    const { cart, totalProduct, clear } = useContext(CartContext);
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('');
    //mostrar ID de compra
    const [idCompra, setidCompra] = useState(()=>{
        const hayidCompra = localStorage.getItem('idCompra')
        return hayidCompra ? JSON.parse(hayidCompra) : ""
        });


    function handleClickComprar () {
        const pedido = {buyer : {nombre: nombre, email: email,telefono: telefono,}, 
    items : [{cart}],
    date: Date(), 
    totalProduct: totalProduct(cart)} ;

//validar form

let nombreRegex = /^[a-zA-ZÁ-ÿ\s]{4,40}$/
let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
let telefonoRegex = /^[0-9]{7,15}/gm
        
if (!nombreRegex.test(nombre) || !emailRegex.test(email) || !telefonoRegex.test(telefono) ) return (Swal.fire('Complete correctamente todos los campos'));
//carga Firebase
const db = getFirestore ();
const collectionRef = collection(db,'orders');
addDoc(collectionRef, pedido).then (({id}) => { 
setidCompra(id)
  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: '¡Compra aprobada!',
    text:  `ID de compra: ${id} `,
    showConfirmButton: false,
    timer: 5500
  })})
  setNombre('')
  setTelefono ('')
  setEmail ('')

  return clear();
    }


return (
    cart.length === 0 ? (
        <> <h1 className={'text-[25px] lg:text-[50px] xl:text-[50px] 2xl:text-[50px] font-semibold text-zinc-500 font-serif'}>¡GRACIAS POR SU COMPRA!</h1>
        <h2 className={'text-[15px] lg:text-[30px] xl:text-[30px] 2xl:text-[50px] font-sans text-zinc-500'}> Aguarde la confirmación y su ID de compra</h2>
        <Link to={`/`} type="button"  className="inline-flex  my-8 items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-800 dark:hover:bg-green-500 dark:focus:ring-blue-800"><svg class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg> VOLVER A COMPRAR</Link>
        <div className='flex justify-center'>
        </div>
        </> ): (
    <>
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
                                <input onChange={(e) => setNombre(e.target.value)} value={nombre} name="nombre" className="focus:outline-none px-3" placeholder="Nombre" required=""/>
                            </label>
                            <label  className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span  className="text-right px-2">Email</span>
                                <input onChange={(e) => setEmail(e.target.value)} value={email} name="email" type="email"  className="focus:outline-none px-3" placeholder="try@example.com" required />
                            </label>
                            <label  className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span  className="text-right px-2">Teléfono </span>
                                <input onChange={(e) => setTelefono(e.target.value)} value={telefono} name="teléfono" className="focus:outline-none px-3" placeholder="Telefono" />
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
   </>
    ))
}