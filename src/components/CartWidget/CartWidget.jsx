import React from "react";
import Carro from "./shop.png"

const CartWidget = () => {
    return (
        <div class="flex items-center md:order-2">
     <button type="button" class="flex mr-3 text-sm bg-white rounded-full md:mr-0 focus:ring-4 focus:ring-white dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
        <img class="w-8 h-8 rounded-full" src={Carro} alt="carro" />
        <p>1</p>
      </button>
        </div>
    )
}
export default CartWidget
