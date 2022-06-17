import { React, useState } from 'react'

function ItemCount ({ stock, initial }) {
    const [counter, setCounter] = useState(initial)
    const clickSuma = () => {
        if(counter >= stock){
            alert('Producto maximo alcanzado')
            return
        }
        setCounter(counter + 1)
      }

    const clickResta = () => {
        if(counter === 1){
            return
        }
        setCounter(counter - 1)
      }
    function onAdd() {
        alert(`Cantidad de productos añadidos: ${counter}`) 
        }
return (
    <div className="btnClick">
    <span className="counter__output"></span>
    <div className="space-x-4 flex flex-row justify-center btn__container">
      <button className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" onClick={clickSuma} >+</button>
      <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{counter}</div>
      <button className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"onClick={clickResta}>-</button>
      <button onClick={() => onAdd(counter)} className=" inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-800 dark:hover:bg-pink-600 dark:focus:ring-blue-800"> COMPRAR
</button>
</div>
</div>
)
}
export default ItemCount