import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
<NavBar />
<ItemListContainer greeting="Gracias por visitarnos! Busque su perfume favorito" title="La Vie Est Belle - 100ml" price="$15.000"/>
    </div>
  );
}

export default App;
