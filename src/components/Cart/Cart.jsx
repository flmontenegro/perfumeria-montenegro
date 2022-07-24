import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';


export default function Cart() {
    const { cart, removeItem, totalProduct} = useContext(CartContext);
    
    return (
        cart.length === 0 ? (
            <> <h1 className={'text-[50px] font-semibold text-zinc-500 font-serif'}>SU CARRO ESTA VACIO</h1>
            <Link to={`/`} type="button"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg> COMPRAR
</Link>
            </> ): (
        <>
    <div>
    <div className=" flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
    <h2 className="text-xl font-semibold">DETALLE DE COMPRA</h2>
        { cart.map((row) => (
        <div  className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
            <ul className="flex flex-col divide-y divide-gray-700">
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                 <div className="flex w-full space-x-2 sm:space-x-4">
                <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" alt="img" src={row.pictureUrl} />
                 <div  className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                    <div   className="space-y-1" >
                    <h3 key={row.id} className="text-lg font-semibold leading-snug sm:pr-8" >{row.title}</h3>
                    <p>{row.marca}</p>
                    </div>
                    <div><label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">CANTIDAD</label>
<div id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
{row.cantidad}
</div></div>
                    <div className="flex text-sm divide-x">
                    <button onClick={() => removeItem(row.id)} type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                         <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                         <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                        </svg>
                        <span>Remove</span>
                    </button>
                    </div>
                    </div>
                    </div>
                    </div></li>
                    </ul>
                    
                    <div className="space-y-1 text-right">
                        <p className="text-lg font-semibold"> CANTIDAD: {row.cantidad}</p>
                        <p>SUBTOTAL: 
                            <span className="font-semidbol">$ {row.subtotal}</span>
                        </p>
                        
                    </div>
                </div>
                ))}
                  <div className="space-y-1 text-center text-xxl">
                       <p>CANTIDAD PRODUCTOS: {totalProduct(cart)}</p>
                        <p>TOTAL: 
                            <span className="font-semibold"> $ {cart.reduce((p,c) => p + c.subtotal ,0)}</span>
                        </p>
                        
                    </div>
                <div className="flex justify-end space-x-4">
                        <Link to="/" type="button" className="px-6 py-2 border rounded-md dark:border-violet-400">Back
                            <span className="sr-only sm:not-sr-only">to shop</span>
                        </Link>
                        <button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                            <span className="sr-only sm:not-sr-only">Continue to Checkout</span>
                        </button>
                    </div>
              
            </div>
</div>

        </>)

    );
}
