import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';


function App() {
  
  return (
    <div className="App">
        <NavBar />
          <ItemListContainer/>
          <ItemDetailContainer /> 
   </div>
  );
}

export default App;
