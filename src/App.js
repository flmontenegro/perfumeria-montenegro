import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <ItemListContainer/>
          <ItemDetailContainer /> 
      </BrowserRouter>
   </div>
  );
}

export default App;
