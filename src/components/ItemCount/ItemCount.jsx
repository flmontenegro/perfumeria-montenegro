import { React, useState } from 'react'
import { Link } from "react-router-dom";

function ItemCount ({ stock, initial, onAdd}) {
    const [counter, setCounter] = useState(initial)
    const add = () => {
        if(counter >= stock){
            alert('Producto maximo alcanzado')
            return
        }
        setCounter(counter + 1)
      }

    const remove = () => {
        if(counter === 1){
            return
        }
        setCounter(counter - 1)
      }

return (
  <div className="btnClick">
  <span className="counter__output"></span>
  <div className="space-x-4 mb-3 flex flex-row justify-center btn__container">
    <button className="mb-2 text-2xl font-bold tracking-tight text-black" onClick={add} >+</button>
    <div className="mb-2 text-2xl font-bold tracking-tight text-black">{counter}</div>
    <button className="mb-2 text-2xl font-bold tracking-tight text-black"onClick={remove}>-</button>
    <button type="button" onClick={() => onAdd(counter)} className="text-white  inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg> CANTIDAD
</button>
</div>
<Link to={`/cart`}><button type="button" className="text-white mb-3 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path> FINALIZAR COMPRA
</button></Link>
</div>
)
}
export default ItemCount