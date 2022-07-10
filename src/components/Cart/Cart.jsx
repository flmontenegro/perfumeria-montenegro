import React from 'react';

export default function componentName() {
  return (
    <>
<div className="col-span-1 bg-white lg:block hidden">
            <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">Order Summary</h1>
            <ul className="py-6 border-b space-y-6 px-8">
                <li className="grid grid-cols-6 gap-2 border-b-1">
                    <div className="col-span-1 self-center">
                        <img src="https://bit.ly/3oW8yej" alt="Product" className="rounded w-full"/>
                    </div>
                    <div className="flex flex-col col-span-3 pt-2">
                        <span className="text-gray-600 text-md font-semi-bold">Studio 2 Headphone</span>
                        <span className="text-gray-400 text-sm inline-block pt-2">Red Headphone</span>
                    </div>
                    <div className="col-span-2 pt-3">
                        <div className="flex items-center space-x-2 text-sm justify-between">
                            <span className="text-gray-400">2 x €30.99</span>
                            <span className="text-pink-400 font-semibold inline-block">€61.98</span>
                        </div>
                    </div>
                </li>
                <li className="grid grid-cols-6 gap-2 border-b-1">
                    <div className="col-span-1 self-center">
                        <img src="https://bit.ly/3lCyoSx" alt="Product" className="rounded w-full"/>
                    </div>
                    <div className="flex flex-col col-span-3 pt-2">
                        <span className="text-gray-600 text-md font-semi-bold">Apple iPhone 13</span>
                        <span className="text-gray-400 text-sm inline-block pt-2">Phone</span>
                    </div>
                    <div className="col-span-2 pt-3">
                        <div className="flex items-center space-x-2 text-sm justify-between">
                            <span className="text-gray-400">1 x €785</span>
                            <span className="text-pink-400 font-semibold inline-block">€785</span>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="px-8 border-b">
                <div className="flex justify-between py-4 text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-pink-500">€846.98</span>
                </div>
                <div className="flex justify-between py-4 text-gray-600">
                    <span>Shipping</span>
                    <span className="font-semibold text-pink-500">Free</span>
                </div>
            </div>
            <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
                <span>Total</span>
                <span>€846.98</span>
            </div>
            <button class="submit-button px-4 py-3 rounded-full bg-pink-400 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
                Pay €846.98
            </button>
        </div>
    </>
  );
}
