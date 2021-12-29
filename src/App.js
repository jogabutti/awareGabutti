import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'
import ItemDetailCOntainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
    <BrowserRouter>
      <NavBar titulo='Aware' />
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting="Lista de articulos"/>}/>
        <Route exact path="/category/:catId" element= {<ItemListContainer greeting="Lista de articulos filtrados"/>}/>
        <Route exact path="/producto/:prodId" element= {<ItemDetailCOntainer greeting="Producto"/>}/>
        <Route path="*" element={<h4> 404 - NOT FOUND</h4>}/>
      </Routes>
    </BrowserRouter>
)

export default App;

//BrowserRouter todo lo que este dentro tiene navegacion
//Routes evalua, funciona como el case