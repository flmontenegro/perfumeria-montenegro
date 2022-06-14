import './App.css';
import './components/NavBar.css'
import "../src/components/ItemListContainer/ItemListContainer.css"
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

function App() {
return (
  <div>
    <NavBar />
    <ItemListContainer />
  </div>
)
}


export default App;