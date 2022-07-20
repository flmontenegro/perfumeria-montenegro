import React from "react";
import Carro from "./shop.png"
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const { totalProduct, cart } = useContext(CartContext);
    return (
        <div className="flex items-center md:order-2">
     <button type="button" className="flex mr-3 text-sm bg-white rounded-full md:mr-0 focus:ring-4 focus:ring-white dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
        <img className="w-8 h-8 rounded-full" src={Carro} alt="carro" />
        <p> {totalProduct(cart)} </p>
      </button>
        </div>
    )
}
export default CartWidget
