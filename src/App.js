import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContext from './Context/CartContext';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartContext>
        <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:categoryId" element={<ItemListContainer/>} />
            <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
            <Route path="/Cart" element={<Cart/>} />
        </Routes>
      </CartContext>
      </BrowserRouter>
   </div>
  );
}

export default App;
