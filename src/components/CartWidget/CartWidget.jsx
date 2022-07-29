import React from "react";
import Carro from "./shop.png"
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const { totalProduct, cart } = useContext(CartContext);

    return (
      cart.length >= 1 ?(
        <div className="items-center">
     <button type="button" className="lg:flex xl:flex 2xl:flex mr-3 text-sm bg-white rounded-full md:mr-0 focus:ring-4 focus:ring-white dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
        <img className="w-8 h-8 rounded-full" src={Carro} alt="carro" />
        <p> {totalProduct(cart)} </p>
      </button>
        </div>): (
          <div className=" items-center ">
     <button type="button" className="lg:flex xl:flex 2xl:flex mr-3 text-sm bg-white rounded-full md:mr-0 focus:ring-4 focus:ring-white dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
        <img className="w-8 h-8 rounded-full" src={Carro} alt="carro" />
      </button>
        </div>
        )
    )
}
export default CartWidget
