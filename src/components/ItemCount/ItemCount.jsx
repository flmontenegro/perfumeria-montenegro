import { React, useState } from 'react'

function ItemCount ({ stock, initial, onAdd}) {
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

return (
    <div className="btnClick">
    <span className="counter__output"></span>
    <div className="space-x-4 mb-3 flex flex-row justify-center btn__container">
      <button className="mb-2 text-2xl font-bold tracking-tight text-black" onClick={clickSuma} >+</button>
      <div className="mb-2 text-2xl font-bold tracking-tight text-black">{counter}</div>
      <button className="mb-2 text-2xl font-bold tracking-tight text-black"onClick={clickResta}>-</button>
      <button onClick={onAdd} className=" inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-800 dark:hover:bg-green-500 dark:focus:ring-blue-800"> COMPRAR
</button>
</div>
</div>
)
}
export default ItemCount